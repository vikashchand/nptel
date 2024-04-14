import React from "react";

function Question({ question, dispatch, userAnswer }) {
  const handleOptionClick = (optionIndex) => {
    if (userAnswer === null) {
      dispatch({ type: "submitAns", payload: optionIndex });
    }
  };

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, optionIndex) => (
          <button
            key={optionIndex}
            className={`btn btn-option ${
              userAnswer !== null &&
              question.correctOption === optionIndex &&
              "correct"
            } ${userAnswer === optionIndex && "wrong"} ${
              userAnswer !== null && question.correctOption === optionIndex && "answer"
            }`}
            onClick={() => handleOptionClick(optionIndex)}
            disabled={userAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
