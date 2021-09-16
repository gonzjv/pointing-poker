import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';

import './welcome.css';



const Welcome = () => {

  const [modalValues, setModalValues] = useState([]);
  const [modalActive, setModalActive] = useState(false);


  return (
    <main className="wrapper welcome-wrapper">
      <section className="main-section">
        <div className="game-title">
          <h1 className="title"> <img src="./images/cards.png" alt="cards" /> <span className="title1">Poker</span> <span className="title2">Planning</span></h1>
          <div className="title-line" />
        </div>
        <h2 className="heading">Start your planning:</h2>
        <h4 className="form-input">Create session:</h4>
        <button className="button" onClick={() => setModalActive(true)}>Start new game</button>
        <p className="heading form-text">or:</p>
        <h4 className="form-input up">Connect to lobby by <span className="colored">URL</span> :</h4>
        <input></input>
        <button className="button">Connect</button>
      </section>
      <Modal setModalValues={setModalValues} active={modalActive} setActive={setModalActive} values={modalValues} />
    </main>

  )
}

export default Welcome;
