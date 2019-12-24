import React from "react";
import App from "next/app";
import { appWithTranslation } from "../server/i18n";

class MyApp extends App {

    render() {
        console.log("MyApp.: ", this.props);
        const { Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        )
    }
}

export default appWithTranslation(MyApp)
