# Language Features
We use the file extension to determine which transpilers will be applied to the file. This document outlines the language syntax features available in each file type. The actual configuration for this lives in [shared.config.js](../build_tools/profiles/common/shared.config.js).

## .js
These files are not transpiled and all syntax used in these files must be supported natively by all of our supported browsers.

## .es
These files can use:
* features included in the [Babel ES2015 Preset](https://babeljs.io/docs/plugins/preset-es2015/)
* [Class Properties](https://babeljs.io/docs/plugins/transform-class-properties/)
* [Object Rest Spread](https://babeljs.io/docs/plugins/transform-object-rest-spread/)

## .jsx
These files can use all of the features supported by the .es extension plus the features included in the [Babel React Preset](https://babeljs.io/docs/plugins/preset-react/). Only use this extension for files using the jsx syntax. Otherwise, use the .es extension.
