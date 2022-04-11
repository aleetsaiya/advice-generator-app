import axios from "axios";

async function fetchAdvice() {
  const res = await axios.get("https://api.adviceslip.com/advice");
  const advice = res.data.slip;
  return {
    id: advice.id,
    msg: advice.advice,
  };
}

export default fetchAdvice;
