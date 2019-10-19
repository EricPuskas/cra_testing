import React from "react";
import PropTypes from "prop-types";

const Button = ({ buttonText, emitEvent }) => {
  const handleSubmit = () => {
    if (emitEvent) emitEvent();
  };
  return (
    <button onClick={handleSubmit} data-test="SharedBtn">
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default Button;
