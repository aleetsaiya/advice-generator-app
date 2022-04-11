import React, { useState, useEffect } from "react";
import Card from "./components/Card.jsx";
import fetchAdvice from "./api/adviceApi.js";
import Alert from "./components/Alert.jsx";
import "./App.css";

const waitingSeconds = 2;
const alertShowingSeconds = 1.5;
let intervalID;

const App = () => {
  const [advice, setAdvice] = useState({
    id: 0,
    msg: "",
  });
  const [countDown, setCountDown] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // component mount
  useEffect(() => {
    fetchData();
  }, []);

  // countdown effect
  useEffect(() => {
    if (countDown > 0) {
      intervalID = setInterval(() => {
        setCountDown(parseInt(countDown - 1));
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [countDown]);

  function fetchData() {
    setLoading(true);
    fetchAdvice()
      .then((res) => {
        setAdvice(res);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, alertShowingSeconds * 1000);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleClick() {
    fetchData();
    setCountDown(waitingSeconds);
  }

  return (
    <main>
      <Card
        title={`Advice #${advice.id}`}
        msg={`"${advice.msg}"`}
        onClick={handleClick}
        loading={loading}
        countDown={countDown}
      />
      <Alert msg={"Request failed."} show={error} />
    </main>
  );
};

export default App;
