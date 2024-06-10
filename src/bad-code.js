var path = require("path");

function test3(req,res) {
    let somePath = req.body.path;
    // ruleid:path-join-resolve-traversal
    return path.join(opts.path, somePath);
}

function test4(req,res) {
    let data = req.body.path;
    data.forEach((entry) => {
    // ruleid:path-join-resolve-traversal
        var pth = path.join(opts.path, entry);
        doSmth(pth);
    })
}