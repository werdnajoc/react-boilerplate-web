import React, {Component} from "react";
import {withRouter} from "next/router";
import PropTypes from "prop-types";

import {withTranslation} from "server/i18n";

import css from "./style.scss";

class Example extends Component {
    static async getInitialProps(props) {
        const {query} = props.query;
        return {
            query,
            namespacesRequired: ["common"]
        }
    }

    render() {
        const {id} = this.props.router.query;

        return (
            <div className={css.container}>
                Example {id}
                <br/>
                language: {this.props.i18n.language}
                <br/>
                translate: {this.props.t("common:World")}
            </div>
        );
    }
}

Example.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withRouter(withTranslation("common")(Example));
