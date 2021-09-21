import React from 'react';
import './modal-connect.css';
import PropTypes from 'prop-types';
import FormConnect from '../Form-connect/Form-connect';

ModalConnect.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

const ModalConnect = ({ active, setActive }) => {
  return (
    <>
      <section className="popup">
        <div className={active ? 'modal active' : 'modal'}>
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <div className="popup_header">
              <h3>Connect to lobby</h3>
            </div>
            <FormConnect setActive={setActive} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalConnect;
