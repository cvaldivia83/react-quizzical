export default function Answer(props) {

  function selectAnswer(event) {
    // I need to select the answer container
    const divElements = event.currentTarget.parentNode;
    event.currentTarget.classList.add("selected");

    [...divElements.children].forEach(item => {
      if (item != event.currentTarget) {
        item.classList.remove("selected");
      }
    })
  }

  return <p className="btn-answer" id={props.id} onClick={selectAnswer}>{props.answer}</p>;
}
