import React from 'react';
import './modal-start-game.css';
import PropTypes from 'prop-types';
import FormStartGame from '../Form-start-game/Form-start-game';

const ModalStartGame = ({ active, setActive }) => {
  return (
    <>
      <section className="popup">
        <div className={active ? 'modal active' : 'modal'}>
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <div className="popup_header">
              <h3>Create game</h3>
            </div>
            <FormStartGame setActive={setActive} />
          </div>
        </div>
      </section>
    </>
  );
};
ModalStartGame.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default ModalStartGame;
