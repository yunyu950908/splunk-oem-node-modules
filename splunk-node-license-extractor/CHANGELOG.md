Change Log
============

1.1.2 - April 20, 2017
----------
Migration to monorepo. No user facing changes.

1.1.1 - March 16, 2017
----------
Removed feature:
  * Removed `--ignoreWarnings` (warnings are now ignored by default)

Bug Fixes:
  * Don't crash on unavailable dependencies (related to optional dependencies, yarn bug?)

1.0.5 - March 15, 2017
----------
Bug Fixes:
  * Filter directories starting with a `.` in `node_modules`


1.0.2 - March 14, 2017
----------
Bug Fixes:
  * 'Is dependency?' and 'Is dev. dependency?' don't include duplicates now


1.0.1 - March 13, 2017
----------
API change:
  * Output formats are now selected using `--html`, `--gfm` and `json-direct-nondev-only`.
    * If no arguments are given, `--html` is used.

Added features:
  * Added JSON 'direct deps. only' mode (`json-direct-nondev-only`).


0.9.0 - March 10, 2017
----------
Added features:
  * Added columns for 'Is dependency?' and 'Is dev. dependency?'.


0.8.0 - March 9, 2017
----------
Added features:
  * Added `description` column (read from `package.json`).


0.7.1 - March 6, 2017
----------
Bug Fixes:
  * Fix license link generation in HTML, GFM output.
