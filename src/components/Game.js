import React from 'react';
import Question from './Question';
import { nanoid } from "nanoid";

export default function Game(props) {

  const [questions, setQuestions] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&encode=base64&category=10")
    .then((response) => response.json())
    .then((data) => {
      setQuestions(data.results);
    });
  }, [])

  questions.forEach(element => {
    element.isClicked = false;
    element.id = nanoid();
  })

  const questionsElements = questions.map((element, index) => {
    return <Question title={element.question}
    answers={[element.correct_answer, ...element.incorrect_answers]} key={nanoid()} />;
  })

  return (
    <div className="container">
      <img
        src="https://res.cloudinary.com/rent-an-instrument/image/upload/v1663619551/blob-amarelo_yxxo9k.png"
        className="lp-yellow-blob" alt="yellow-blob"
      />
      <div className="btn-purple btn-small" onClick={props.newGame}>
        Back
      </div>

      {questionsElements}

    </div>
  );
}
