import React, {Component} from "react";
import {withRouter} from "next/router";
import PropTypes from "prop-types";

import {withTranslation} from "server/i18n";

import css from "./style.scss";

class Home extends Component {
    static async getInitialProps(props) {
        const {query} = props.query;
        return {
            query,
            namespacesRequired: ["common"]
        }
    }

    render() {
        return (
            <div className={css.container}>

            </div>
        );
    }
}

Home.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withRouter(withTranslation("common")(Home));
