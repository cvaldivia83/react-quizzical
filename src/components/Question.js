import Answer from './Answer';
import { nanoid } from "nanoid";

export default function Question(props) {

  const answerElements = props.answers.map((item, index) => <Answer id={`answer-${index + 1}`} answer={item} key={nanoid()} />)

  return (
    <div className="question-container">
      <h2 className="question-title">{atob(props.title)}</h2>
      <div className="answer-container">
        {answerElements}
      </div>
    </div>
  );
}
