# Test runner verification

This directory contains applications designed to verify that the test runner operates as expected.

- `apps`
  - `canterlot`: uses the *namespacedAppPages* profile to test the runner's webpack profile support
  - `es6ftw`: uses *appBase* and *SplunkNameModuleIdsPlugin* to load custom sources and test ES6-related features, including coverage
  - `ponyville`: simulates corejs_test (uses *MockModulePlugin*) + misc. tests

To run the verification test suite:

```
$ cd web/test/verification
$ karma start --coverage
```

Two tests are expected to fail if `--coverage` is not specified.
