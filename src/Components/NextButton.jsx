import PropTypes from "prop-types";

NextButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
  numQuestions: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null || answer === undefined) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
