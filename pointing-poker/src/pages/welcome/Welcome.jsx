import React from 'react';
import './welcome.css';



function Welcome() {
  return (


    <div className="wrapper">
      <div className="title">
        <img src="./images/cards.png" alt="cards" />
        <h1> Poker Planning</h1>

        <section className="form">
          <h2>Start your planning</h2>
          <h4>Creat session</h4>
          <button className="button">Start new game</button>
          <p>or:</p>
          <h4>Connect to lobby by URL:</h4>
          <input></input><button>Connect</button>
        </section>

      </div>
    </div>

  )
}

export default Welcome;
