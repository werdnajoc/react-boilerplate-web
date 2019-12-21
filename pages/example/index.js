import React, {Component} from "react";
import {withRouter} from "next/router";

import {Nav} from "src/components";

import css from "./style.scss";

class Example extends Component {
    static async getInitialProps(props) {
        const {query} = props.query;
        return {
            query
        }
    }

    render() {

        const {id} = this.props.router.query;

        return (
            <div className={css.container}>
                <Nav />
                Example {id}
            </div>
        );
    }
}


export default withRouter(Example);
