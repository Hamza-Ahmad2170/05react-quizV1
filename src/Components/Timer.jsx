import { useEffect } from "react";
import PropTypes from "prop-types";

Timer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  secondsRemaining: PropTypes.number.isRequired,
};

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins >= 10 ? mins : "0" + mins}:{seconds >= 10 ? seconds : "0" + seconds}
    </div>
  );
}

export default Timer;
