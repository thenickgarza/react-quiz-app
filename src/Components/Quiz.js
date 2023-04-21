import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].correctAnswer === optionChosen) {
      setScore(score + 1);
    }
    alert(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].correctAnswer === optionChosen) {
        setScore(score + 1);
      }
      setGameState("endScreen")
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].answerA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].answerB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].answerC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].answerD}
        </button>
        {currentQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finsish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
