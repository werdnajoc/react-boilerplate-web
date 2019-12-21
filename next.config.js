const webpack = require("webpack");
const path = require("path");
require("dotenv").config({
    path: (process.env.NODE_ENV === "production") ? ".env" : ".env.development"
});
const withSass = require("@zeit/next-sass");
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },

    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        }
        /**
         * Returns environment variables as an object
         */
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {});

        /** Allows you to create global constants which can be configured
         * at compile time, which in our case is our environment variables
         */
        config.plugins.push(new webpack.DefinePlugin(env));

        config.resolve.alias = {
            ...config.resolve.alias,
            "src": path.resolve(__dirname, "./src"),
            "server": path.resolve(__dirname, "./server"),
        }
        return config;
    },
});
