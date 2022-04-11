import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import divideImage from "../assets/pattern-divider-desktop.svg";
import diceImage from "../assets/icon-dice.svg";

const cardProps = {
  title: PropTypes.string,
  msg: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  countDown: PropTypes.number,
};

const Card = ({ title, msg, onClick, loading, countDown }) => {
  const cardClassName = loading ? "card card__loading" : "card";

  return (
    <section className={cardClassName}>
      <div className="card__id">{title}</div>
      <p className="card__msg">{msg}</p>
      <img src={divideImage} alt="divide" className="card__divide" />
      <button
        className="card__btn"
        onClick={onClick}
        disabled={countDown !== 0}
      >
        {countDown === 0 ? <img src={diceImage} alt="dice" /> : countDown}
      </button>
    </section>
  );
};

Card.propTypes = cardProps;

export default Card;
