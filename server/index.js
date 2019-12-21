const express = require('express');
const next = require('next');

const routes = require("./routes");
let app = next({dev: true})

const env = process.env.NODE_ENV;
const port = (process.env.PORT) ? process.env.PORT : 3000;

if(env === 'production') {
    app = next({dev: false});
}

const handle = app.getRequestHandler();



app.prepare()
    .then(() => {
        const server = express()



        routes(server, app);

        server.all('*', (req, res) => {
            return handle(req, res)
        });


        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on ${env} http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });
