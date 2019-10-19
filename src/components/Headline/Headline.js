import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  render() {
    const { header, description } = this.props;
    if (!header) return null;
    return (
      <div data-test="Headline">
        <h1 data-test="header"> {header} </h1>
        <p data-test="description"> {description} </p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      email: PropTypes.string,
      onlineStatus: PropTypes.bool
    })
  )
};

export default Headline;
