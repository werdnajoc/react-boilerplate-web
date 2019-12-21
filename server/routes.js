module.exports = function (server, app) {
    server.get('/example/:id', (req, res) => {
        return app.render(req, res, '/example', { id: req.params.id })
    });
};
