export default function Game(props) {
  return (
    <div className="container">
      <div className="btn-purple btn-small" onClick={props.newGame}>
        Back
      </div>
    </div>
  );
}
