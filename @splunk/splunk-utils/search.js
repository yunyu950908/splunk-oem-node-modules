/**
* Copyright © 2018 Splunk Inc.
* SPLUNK CONFIDENTIAL – Use or disclosure of this material in whole or in part
* without a valid written license from Splunk Inc. is PROHIBITED.
**/'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addLeadingSearchCommand = addLeadingSearchCommand;
exports.stripLeadingSearchCommand = stripLeadingSearchCommand;
exports.createJava5HashForString = createJava5HashForString;
exports.getCachedSearch = getCachedSearch;
exports.createSearchJob = createSearchJob;
exports.oneShot = oneShot;
exports.postAction = postAction;
exports.getData = getData;
exports.batchGetSearches = batchGetSearches;
exports.validateSearch = validateSearch;

var _lodash = require('lodash');

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _fetch = require('./fetch');

var _url = require('./url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesIgnoredByCache = ['webframework.cache.hash', 'app', 'owner', 'provenance', 'refresh', 'refreshType'];

/**
 * A set of utilities for creating, getting, and manipulating Splunk search jobs.
 * @file
 */

/**
 * Returns a fully qualified search string by prepending the 'search'
 * command of unqualified searches.  This method deems strings as unqualified
 * if it does not start with a | or 'search '
 *
 * @param {String} search - The search string.
 * @returns {String}
 * @public
 */
function addLeadingSearchCommand(search) {
    var trimmedSearch = search.trim();
    if ((0, _lodash.startsWith)(trimmedSearch, '|')) {
        return search;
    }
    if ((0, _lodash.startsWith)(trimmedSearch, 'search ') && trimmedSearch.length > 7) {
        return search;
    }
    return 'search ' + trimmedSearch;
}

/**
 * Returns an unqualified search string by removing any leading 'search '
 * command.  This method does a simple search at the beginning of the
 * search.
 *
 * @param {String} search - The search string.
 * @returns {String}
 * @public
 */
function stripLeadingSearchCommand(search) {
    var trimmedSearch = search.trim();
    if ((0, _lodash.startsWith)(trimmedSearch, 'search ')) {
        return trimmedSearch.substring(7);
    }
    return search;
}

/**
 * Hashes a string using the algorithm from the `java.lang.String` hashCode function in Java SE 5
 * and prepends 'java5'. This is the hash function used by the splunkjs searchmanager to find
 * similar searches that are already active on the server.
 *
 * Note: The returned hash might be negative.
 *
 * @param {String} s - The string to hash.
 * @returns {String} The hash.
 * @public
 */
function createJava5HashForString(s) {
    var h = 0;
    /* eslint-disable no-plusplus, no-bitwise */
    for (var i = 0, n = s.length; i < n; i++) {
        // (x|0) converts to 32-bit int
        h = (31 * h | 0) + s.charCodeAt(i) | 0;
    }
    /* eslint-enable no-plusplus, no-bitwise */
    h = h.toString(16);
    return 'java5:' + h;
}

/**
 * Makes a request to the 'search/jobs' REST endpoint to fetch any existing searches matching the provided
 * cache config. To qualify the search must have been created with the same request as the search options
 * provided less the options specifically called out as propertiesIgnoredByCache
 *
 * @param searchParameters {Object} - The search parameters. See the [Splunk documentation on the
 * `search/jobs` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs)
 * for available parameters.
 * @param {Object} [cacheOptions] - options to pass to the caching system
 * @param {Number} [cacheOptions.cacheLimit] - the maximum age in seconds of any artifact for it to qualify as a valid cached search
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} resolves with search state if cached job found, otherwise resolves null.
 * @public
 */
function getCachedSearch(searchParameters) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$cacheLimit = _ref.cacheLimit,
        cacheLimit = _ref$cacheLimit === undefined ? 0 : _ref$cacheLimit;

    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    // mimics the hashing traditional in splunkjs
    var hash = createJava5HashForString(searchParameters.search);
    var qs = _querystring2.default.encode({
        output_mode: 'json',
        search: 'request.webframework.cache.hash=' + hash
    });
    return fetch((0, _url.createRESTURL)('search/jobs', {}, configOptions) + '?' + qs, baseFetchInit).then(function (res) {
        return res.json();
    }).then(function (body) {
        var targetParams = (0, _lodash.omit)(searchParameters, propertiesIgnoredByCache);
        var candidateJobs = body.entry.filter(function (entry) {
            return (0, _lodash.isEqual)(targetParams, (0, _lodash.omit)(entry.content.request, propertiesIgnoredByCache));
        });
        if (candidateJobs.length > 0) {
            var newestJob = (0, _lodash.maxBy)(candidateJobs, function (entry) {
                return new Date(entry.published).valueOf();
            });
            var ageThreshold = cacheLimit <= 0 ? 0 : new Date().valueOf() - cacheLimit * 1000;
            if (new Date(newestJob.published).valueOf() > ageThreshold) {
                return newestJob;
            }
        }
        // No matched searches, no cached
        return null;
    }).catch((0, _fetch.handleError)('Failed to get cached jobs.'));
}

/**
 * Makes a request to the 'search/jobs' REST endpoint to create a new search job.
 *
 * @param searchParameters {Object} - The search parameters. See the [Splunk documentation on the
 * `search/jobs` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs)
 * for available parameters.
 * @param [namespaceOptions] {Object}
 * @param {String} [namespaceOptions.app] - App namespace to use.
 * @param {String} [namespaceOptions.owner] - User namespace to use.
 * @param {Sting} [namespaceOptions.sharing] - Must be one of [ '' | 'app' | 'global' | 'system' ].
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} If successful, the Promise resolves with an object containing the new search
 * job's sid.
 * @public
 */
function createSearchJob(searchParameters) {
    var namespaceOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    return fetch((0, _url.createRESTURL)('search/jobs', namespaceOptions, configOptions), _extends({}, baseFetchInit, {
        method: 'POST',
        body: _querystring2.default.encode(_extends({
            output_mode: 'json'
        }, searchParameters))
    })).then((0, _fetch.handleResponse)(201)).catch((0, _fetch.handleError)('Failed to create search job.'));
}

/**
 * Creates a one shot search in which the search results are returned with the initial request to
 * create the search job.
 * @param searchParameters {Object} - The search parameters. See the [Splunk documentation on the
 * `search/jobs` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs)
 * for available parameters.
 * @param [namespaceOptions] {Object}
 * @param {String} [namespaceOptions.app] - App namespace to use.
 * @param {String} [namespaceOptions.owner] - User namespace to use.
 * @param {Sting} [namespaceOptions.sharing] - Must be one of [ '' | 'app' | 'global' | 'system' ].
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} If successful, the Promise resolves with the search job results.
 * @public
 */
function oneShot(searchParameters) {
    var namespaceOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    return fetch((0, _url.createRESTURL)('search/jobs', namespaceOptions, configOptions), _extends({}, baseFetchInit, {
        method: 'POST',
        body: _querystring2.default.encode(_extends({
            output_mode: 'json'
        }, searchParameters, {
            exec_mode: 'oneshot'
        }))
    })).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to create one shot search job'));
}

/**
 * Makes a POST request to the `search/jobs/${search_id}/control` REST endpoint to perform an action on a
 * search job.
 *
 * @param sid {String} - The search id of the search to perform the action on.
 * @param [parameters] {Object} - The request parameters. See the [Splunk documentation on the
 * `search/jobs/{search_id}/control` REST endpoint](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fcontrol)
 * for available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise with the results from the server.
 * @public
 */
function postAction(sid) {
    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    return fetch((0, _url.createRESTURL)('search/jobs/' + sid + '/control', {}, configOptions), _extends({}, baseFetchInit, {
        method: 'POST',
        body: _querystring2.default.encode(_extends({}, parameters, { output_mode: 'json' }))
    })).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Action ' + parameters.action + ' failed on search job ' + sid));
}

/**
 * Makes a GET request to the `search/jobs/${search_id}/${endpoint}` REST endpoint to get data
 * from the specified search job.
 *
 * @param sid {String} - The search id of the search job to get data from.
 * @param [endpoint = ''] {String} - The endpoint to use. Must be one of:
 *
 * * default (empty string) - The progress or current state of the job. [See documentation for
 * available parameters.](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D)
 * * events - A list of events matched by the job. [See documentation for available parameters.
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fevents)
 * * results - Get the search results. Only available when the search job is done or
 * finalized. [See documentation for available parameters.
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fresults)
 * * results_preview - Get a preview of the search results, if enabled. [See documentation for available parameters.
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fresults_preview)
 * * summary - Get the `getFieldsAndStats` output of the events to-date. [See documentation for available parameters.
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Fsummary)
 * * timeline - Get event distribution over time of the untransformed events read to-date. [See documentation for available parameters.
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D.2Ftimeline)
 * @param [parameters] {Object} - See the [Splunk documentation on the endpoint
 * used](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs.2F.7Bsearch_id.7D)
 * for the available parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 *
 * @returns {Promise} - A Promise with the results from the server.
 * @public
 */
function getData(sid) {
    var endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var configOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var baseFetchInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _fetch.defaultFetchInit;

    var qs = _querystring2.default.encode(_extends({ output_mode: 'json' }, parameters));
    var url = (0, _url.createRESTURL)('search/jobs/' + sid + (endpoint && '/' + endpoint), {}, configOptions);
    return fetch(url + '?' + qs, baseFetchInit).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to get ' + (endpoint || 'status') + ' for job ' + sid));
}

/**
 * Gets the status of multiple searches in a single request.
 *
 * @param sids {String[]} - An array of search ids to get.
 * @param [parameters] {Object} - See the [Splunk documentation on the search/jobs endpoint
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fjobs) for
 * supported parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} - A Promise with the results from the server.
 * @public
 */
function batchGetSearches(sids) {
    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    var qs = _querystring2.default.encode(_extends({
        output_mode: 'json',
        id: sids,
        count: sids.length
    }, parameters));
    return fetch((0, _url.createRESTURL)('search/jobs', {}, configOptions) + '?' + qs, baseFetchInit).then((0, _fetch.handleResponse)(200)).catch((0, _fetch.handleError)('Failed to get batch status of jobs.'));
}

/**
 * Verifies a search string is valid using the `search/parser` endpoint.
 *
 * @param {String} search - The search string to verify.
 * @param [parameters] {Object} - See the [Splunk documentation on the search/parser endpoint
 * ](http://docs.splunk.com/Documentation/Splunk/latest/RESTREF/RESTsearch#search.2Fparser) for
 * supported parameters.
 * @param {Object} [configOptions] - Splunk config options passed to url.createRESTURL. Defaults to
 * the values provided by @splunk/splunk-utils/config.
 * @param {Object} [baseFetchInit] - Options passed to the fetch call. Defaults to the defaultFetchInit
 * in @splunk/splunk-utils/fetch.
 * @returns {Promise} A Promise that resolves to an object containing a `valid` property set to
 * `true` if the search string is valid, `false` otherwise. If the search string is valid, the
 * object will also contain a `data` property set to the response data received from the server. If
 * the search string is invalid, the object will also contain an `error` property set to the error
 * message received from the server. If the request itself fails the Promise is rejected.
 * @public
 */
function validateSearch(search) {
    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var configOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var baseFetchInit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _fetch.defaultFetchInit;

    var qs = _querystring2.default.encode(_extends({
        output_mode: 'json',
        parse_only: true,
        q: addLeadingSearchCommand(search)
    }, parameters));
    return fetch((0, _url.createRESTURL)('search/parser', {}, configOptions) + '?' + qs, baseFetchInit).then((0, _fetch.handleResponse)(200)).then(function (data) {
        return { valid: true, data: data };
    }).catch(function (res) {
        return res.json().then(function (data) {
            var defaultError = 'Failed to validate search string.';
            var foundError = (0, _fetch.findErrorMessage)(data);
            var errorMessage = foundError ? foundError.text : defaultError;
            return res.status === 400 ? Promise.resolve({ valid: false, error: errorMessage }) : Promise.reject(new Error(errorMessage));
        });
    });
}