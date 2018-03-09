# Splunk's Shared Eslint Configuration

This package provides extendable eslint configuration objects. Currently, two configs are available, `browser` and `node`.

## Usage

Install this package and it's peer dependencies.

1. Install `eslint-config-splunk`
    ```
    yarn add --dev eslint-config-splunk
    ```
    Or
    ```
    npm install --save-dev eslint-config-splunk
    ```

2. Get peer dependencies:
    ```
    yarn info "eslint-config-airbnb" peerDependencies
    ```
    Or
    ```
    npm info "eslint-config-airbnb" peerDependencies
    ```

3. Install the correct version of each peer dependency as dev dependency to your project.

4. Add the appropriate entry to your eslint configuration:
    ```
    extends: "splunk/browser"
    ```
    Or
    ```
    extends: "splunk/node"
    ```

Note: Eslint requires dependencies to be installed as peers. See [this issue on github](https://github.com/eslint/eslint/issues/3458) for more background on this.
