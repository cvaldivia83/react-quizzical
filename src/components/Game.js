import React from 'react';
import Question from './Question';

export default function Game(props) {

  const [questions, setQuestions] = React.useState([])

  function questionsDecoder (array) {
    return array.forEach(hash => {
      for (const element in hash) {
        if(typeof(hash[element]) ===  'string') {
          hash[element] = atob(hash[element])
        } else if (hash[element] === 'object') {
          hash[element] = hash[element].map(answer => atob(answer))
        } else {
          hash[element] = hash[element]
        }
      }
    })
  }

  // questionsDecoder(questions);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&encode=base64&category=10")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, [])


  const questionsElements = questions.map((element, index) => {
    return <Question title={element.question}
    answers={[element.correct_answer, ...element.incorrect_answers]} key={`q-${index + 1}`} />;
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
