var path = require('path');

function test1() {
    function someFunc(entry) {
        // ruleid:path-join-resolve-traversal
        var extractPath = path.join(opts.path, entry.path);
        return extractFile(extractPath);
    }
    someFunc();
}