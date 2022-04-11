import React, { memo } from "react";
import icon from "../assets/circle-exclamation-solid.svg";
import PropTypes from "prop-types";
import "./Alert.css";

const alertProps = {
  msg: PropTypes.string,
  show: PropTypes.bool,
};

const Alert = ({ msg, show }) => {
  const alertClassName = show ? "alert alert__show" : "alert";
  return (
    <section className={alertClassName}>
      <img src={icon} alt="alert-icon" />
      <p>{msg}</p>
    </section>
  );
};

Alert.propTypes = alertProps;

export default memo(Alert);
