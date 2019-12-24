import React, {Component} from "react";
import PropTypes from "prop-types";

import {withTranslation} from "server/i18n";

import css from "./style.scss";

class Error extends Component {
    static async getInitialProps(props) {
        const statusCode = props.res ? props.res.statusCode : props.err ? props.err.statusCode : 404;
        return {
            namespacesRequired: ["common"],
            statusCode
        }
    }

    render() {
        const {statusCode} = this.props;
        return (
            <div className={css.container}>
                Error: {statusCode}
            </div>
        );
    }
}

Error.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Error);
