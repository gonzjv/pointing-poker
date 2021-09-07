import React from 'react';
import './welcome.css';



function Welcome() {
  return (
    <div className="wrapper welcome-wrapper">
     
      <section className="main-section">
      <div className="game-title">
      <h1 className="title"> <img src="./images/cards.png" alt="cards" /> Poker Planning</h1>
      </div>
        <h2 className="heading">Start your planning:</h2>
        <h4 className="form-input">Create session:</h4>
        <button className="button">Start new game</button>
        <p className="heading form-text">or:</p>
        <h4 className="form-input up">Connect to lobby by URL:</h4>
        <input></input>
        <button className="button">Connect</button>
      </section>
    </div>

  )
}

export default Welcome;
