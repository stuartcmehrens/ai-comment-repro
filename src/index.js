var path = require('path');

function test1() {
    function someFunc(entry) {
        // ruleid:path-join-resolve-traversal
        var extractPath = path.join(opts.path, entry.path);
        return extractFile(extractPath);
    }
    someFunc();
}

function test2() {
    function someFunc(val) {
        createFile({
            // ruleid:path-join-resolve-traversal
            filePath: path.resolve(opts.path, val)
        })
        return true
    }
    someFunc()
}