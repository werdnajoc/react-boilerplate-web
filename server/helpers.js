function globalRequire(path) {
    return require(__dirname + "/" + path);
}

module.exports = {
    globalRequire
};
