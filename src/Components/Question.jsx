import PropTypes from "prop-types";
import Options from "./Options";

Question.propTypes = {
  question: PropTypes.shape({
    correctOption: PropTypes.number,
    options: PropTypes.array,
    points: PropTypes.number,
    question: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number,
};

function Question({ question, dispatch, answer }) {
  // const {correctOption, options, points, question} = question
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
