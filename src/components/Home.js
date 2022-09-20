import React from 'react';
import 'animate.css';

export default function Home(props) {

  React.useEffect(() => {
    const yellow = document.getElementById("yellow-blob");
    const blue = document.getElementById("blue-blob");
    yellow.classList.add("animate__animated", "animate__fadeInTopRight");
    blue.classList.add("animate__animated", "animate__fadeInBottomLeft");

  }, [])
  return (
    <main className="lp">
        <img
          src="https://res.cloudinary.com/rent-an-instrument/image/upload/v1663619551/blob-amarelo_yxxo9k.png"
          className="lp-yellow-blob" id="yellow-blob"
        />
      <h1 className="lp-title">Quizzical</h1>
      <p className="lp-paragraph">A fun game to test your knowledge.</p>
      <div className="btn-purple btn-large" onClick={props.newGame}>
        Start Quizz
      </div>
        <img
          src="https://res.cloudinary.com/rent-an-instrument/image/upload/v1663619551/blob-azul_dzm3mo.png"
          className="lp-blue-blob" id="blue-blob"
        />
    </main>
  );
}
