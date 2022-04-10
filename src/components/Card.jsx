import React from "react";
import PropTypes from "prop-types";

const cardProps = {
  title: PropTypes.string,
  msg: PropTypes.string,
};

const Card = ({ title, msg }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{msg}</p>
    </>
  );
};

Card.propTypes = cardProps;

export default Card;
