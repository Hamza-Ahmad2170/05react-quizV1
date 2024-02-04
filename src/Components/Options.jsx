import PropTypes from "prop-types";

Options.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    options: PropTypes.array,
    correctOption: PropTypes.number,
    points: PropTypes.number,
    id: PropTypes.string
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={hasAnswered}
          className={`btn btn-option  ${index === answer ? "answer" : ""}  ${
            hasAnswered ? index === question.correctOption
              ? "correct"
              : "wrong"
          : ""}`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
