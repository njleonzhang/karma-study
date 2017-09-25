// test/test_index.js

// require all modules ending in "spec" from the
// current directory and all subdirectories
var testsContext = require.context("./test", true, /\.spec$/);
testsContext.keys().forEach(testsContext);

