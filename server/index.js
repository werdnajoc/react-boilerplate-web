const express = require("express"),
    next = require("next"),
    compression =  require("compression"),
    bodyParser = require("body-parser");

const webRoutes = require("./routes/web/routes");
const apiRoutes = require("./routes/api/routes");


let app = next({dev: true})

const env = process.env.NODE_ENV;
const port = (process.env.PORT) ? process.env.PORT : 3000;

if (env === "production") {
    app = next({dev: false});
}

const handle = app.getRequestHandler();


app.prepare()
    .then(() => {
        const server = express();

        server.use(compression())
            .use(bodyParser.urlencoded({extended: false}))
            .use("/api", apiRoutes)
            .use(bodyParser.json());


        webRoutes(server, app);

        server.all("*", (req, res) => {
            return handle(req, res)
        });


        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${env} http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });
