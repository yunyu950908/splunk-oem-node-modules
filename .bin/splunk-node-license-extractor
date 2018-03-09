#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = extractLicenses;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _listr = require('listr');

var _listr2 = _interopRequireDefault(_listr);

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tmpFile = 'licenses_raw.tmp';
/* eslint no-param-reassign: 'off' */

// Generates a list of all dependencies, their versions, licenses, and repositories.
// Mostly a wrapper around 'yarn licenses'.
// Output is:
//   - a HTML table (will survive a copy to Excel)
//   - a GFM table (tables aren't part of regular Markdown)
//   - a JSON file (including only direct, non-dev dependencies)

var outFileHtml = 'licenses.html';
var outFileJSON = 'licenses.json';
var outFileMd = 'licenses.md';
// according to the spdx.org FAQ, this license database is licensed PDDL-1.0
var licenseDBUrl = 'https://raw.githubusercontent.com/spdx/license-list-data/master/json/licenses.json';

var licenseLink = function licenseLink(_ref, l) {
    var licenses = _ref.licenses;
    return _lodash2.default.has(licenses, l) ? '<a href="https://spdx.org/licenses/' + licenses[l].reference + '">' + l + '</a>' : l;
};
var yesNo = function yesNo(u) {
    return u === true ? 'x' : '';
};
var findPackage = function findPackage(name) {
    var pkgInfo = {};
    _resolve2.default.sync(name, {
        basedir: process.cwd(),
        packageFilter: function packageFilter(pkg) {
            pkgInfo = pkg;
            pkg.main = 'package.json'; // bug in resolve package?
            return pkg;
        }
    });
    return pkgInfo;
};

var tasks = new _listr2.default([{
    title: 'Running yarn license list task',
    task: function task(ctx) {
        return (
            // has to use temp file because yarn exits before its writes are done
            _execa2.default.shell('yarn licenses ls --json > ' + tmpFile).then(function (result) {
                ctx.warnings = [];
                if (result.stderr) {
                    ctx.warnings = ['License task warnings (usually safe to ignore):', result.stderr.split(_os2.default.EOL), _os2.default.EOL];
                }
            })
        );
    }
}, {
    title: 'Downloading spdx license database',
    task: function task(ctx) {
        return _axios2.default.get(licenseDBUrl).then(function (_ref2) {
            var licenses = _ref2.data.licenses;

            if (_lodash2.default.isUndefined(licenses) || _lodash2.default.isEmpty(licenses)) {
                throw new Error('Download of license database failed');
            }
            ctx.licenses = _lodash2.default.keyBy(licenses, 'licenseId');
        });
    }
}, {
    title: 'Parsing license data',
    task: function task(ctx) {
        var table = (0, _lodash2.default)(_fs2.default.readFileSync(tmpFile)).split(_os2.default.EOL).compact().map(JSON.parse).find(function (i) {
            return i.type === 'table';
        });
        ctx.data = _lodash2.default.get(table, 'data.body');
        _fs2.default.unlinkSync(tmpFile);
    }
}, {
    title: 'Reading package descriptions',
    task: function task(ctx) {
        ctx.data = _lodash2.default.map(ctx.data, function (p) {
            try {
                p.push(findPackage(_lodash2.default.first(p)).description || 'No description available');
            } catch (e) {
                ctx.warnings.push('Package ' + _lodash2.default.first(p) + ': unable to read description');
                p.push('Package not available');
            }
            return p;
        });
    }
}, {
    title: 'Reading main package dependencies',
    task: function task(ctx, _task) {
        var topDeps = (0, _lodash2.default)(_fs2.default.readdirSync(_path2.default.resolve('node_modules'))).reject(function (p) {
            return _lodash2.default.startsWith(p, '.');
        }).map(function (p) {
            return [p, findPackage(p).version];
        }).fromPairs().value();

        // eslint-disable-next-line global-require, import/no-dynamic-require
        ctx.pData = require(_path2.default.resolve('package.json'));
        _task.title = 'This is package ' + ctx.pData.name + ', version ' + ctx.pData.version;
        ctx.data = _lodash2.default.map(ctx.data, function (p) {
            var isTopDep = topDeps[p[0]] === p[1];
            p.push(_lodash2.default.has(ctx.pData.dependencies, p[0]) && isTopDep);
            p.push(_lodash2.default.has(ctx.pData.devDependencies, p[0]) && isTopDep);
            return p;
        });
    }
}, {
    title: 'Generating package data structure',
    task: function task(ctx) {
        ctx.packages = ctx.data.map(function (packageData) {
            return {
                name: packageData[0],
                version: packageData[1],
                license: packageData[2],
                url: packageData[3],
                description: packageData[4],
                isDirectDependency: packageData[5],
                isDevDependency: packageData[6]
            };
        });
    }
}, {
    title: 'Generating GFM (' + outFileMd + ')',
    task: function task(ctx) {
        var md = (0, _lodash2.default)(ctx.data).map(function (r) {
            var formatCell = function formatCell(c, i) {
                if (i === 2) {
                    return licenseLink(ctx, c);
                } else if (i === 5 || i === 6) {
                    return yesNo(c);
                }
                return c;
            };
            var formattedRow = _lodash2.default.map(r, function (c, i) {
                return formatCell(c, i);
            });
            return '|' + formattedRow.join('|') + '|';
        }).join(_os2.default.EOL);
        md = '|Package|Version|License|Repository|Description|Dep.|Dev. dep.|' + _os2.default.EOL + '|---|---|---|---|---|---|---|' + _os2.default.EOL + md + '}';
        _fs2.default.writeFileSync(outFileMd, md);
    },
    enabled: function enabled(ctx) {
        return _lodash2.default.includes(ctx.args, '--gfm');
    }
}, {
    title: 'Generating HTML (' + outFileHtml + ')',
    task: function task(ctx) {
        var formatUnknown = function formatUnknown(c) {
            return '<span style="color:red;font-weight:bold;">' + c + '</span>';
        };
        var link = function link(u) {
            return _lodash2.default.startsWith(u, 'http') ? '<a href="' + u + '">' + u + '</a>' : u;
        };

        var cell = function cell(c, i) {
            if (c === 'Unknown') {
                return formatUnknown(c);
            } else if (i === 2) {
                return licenseLink(ctx, c);
            } else if (i === 3) {
                return link(c);
            } else if (i === 5 || i === 6) {
                return yesNo(c);
            }
            return c;
        };

        var html = '<html><body style="font-family:sans-serif"><table><thead><tr>\n                <th>Package</th><th>Version</th><th>License</th><th>Repository</th>\n                <th>Description</th><th>Dep.</th><th>Dev dep.</th></tr></thead>\n                ' + (0, _lodash2.default)(ctx.data).map(function (r) {
            return '<tr>' + _lodash2.default.map(r, function (c, i) {
                return '<td>' + cell(c, i) + '</td>';
            }).join('') + '</tr>';
        }).join('') + '</table></body></html>';

        _fs2.default.writeFileSync(outFileHtml, html);
    },
    enabled: function enabled(ctx) {
        return _lodash2.default.includes(ctx.args, '--html');
    }
}, {
    title: 'Generating JSON dependencies (direct non-dev only) (' + outFileJSON + ')',
    task: function task(ctx) {
        var packages = ctx.packages.filter(function (packageData) {
            return packageData.isDirectDependency;
        }).filter(function (packageData) {
            return !packageData.isDevDependency;
        }).map(function (packageData) {
            return _lodash2.default.omit(packageData, 'isDevDependency', 'isDirectDependency');
        });
        var output = {
            __comment__: 'GENERATED FILE FROM THE SPLUNK-NODE-LICENSE-EXTRACTOR PACKAGE',
            packages: packages
        };
        _fs2.default.writeFileSync(outFileJSON, JSON.stringify(output, null, 4));
    },
    enabled: function enabled(ctx) {
        return _lodash2.default.includes(ctx.args, '--json-direct-nondev-only');
    }
}]);

function extractLicenses(args) {
    if (_lodash2.default.isEmpty(args)) {
        args = ['--html'];
    }

    return tasks.run({ args: args }).then(function (ctx) {
        if (!_lodash2.default.isEmpty(ctx.warnings)) {
            console.log('' + _os2.default.EOL + ctx.warnings.join(_os2.default.EOL)); // eslint-disable-line no-console
        }
    });
}

if (require.main === module) {
    extractLicenses(process.argv.slice(2)).catch(function (err) {
        console.log(_chalk2.default.red(err.message)); // eslint-disable-line no-console
        process.exit(1);
    });
}