import PropTypes from "prop-types";

Progress.propTypes = {
  index: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  maxPossiblePoints: PropTypes.number.isRequired,
  answer: PropTypes.number.isRequired,
};

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + answer}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
