# Time Range Utils

Utilities for fetching, parsing, evaluating and manipulating time ranges.

Install
-------
```
npm install @splunk/time-range-utils
```
Or
```
yarn add @splunk/time-range-utils
```

IE11 and Safari Support
-------
The `timeParser` module relies on `window.fetch` and `window.Promise`. IE11 requires a polyfill
for both. Safari 10.0 and lower require a polyfill for fetch. Since polyfills create globals, they
are not included in the `@splunk/time-range-utils` package. To support these browsers, ensure
polyfills, such as `whatwg-fetch` and `promise-polyfill`, are included as a part of your build.

The `time` module does not use `window.fetch` or `window.Promise`.
