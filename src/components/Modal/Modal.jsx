import React from "react";
import "./modal.css"
import PropTypes from "prop-types";
import Form from "../Form/Form";

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  setModalValues: PropTypes.func,
  values: PropTypes.array
}


function Modal({ setModalValues, active, setActive, values}) {

  return (
    <>
      <section className="popup">
        <div className={active ? "modal active" : "modal"} >
          <div className="popup_content" onClick={(e) => e.stopPropagation()}>
            <div className="popup_header">
              <h3>Connect to Lobby</h3>
              <div className="toggle-wrapper">
                <p>Connect as<br /> Observer</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <Form setModalValues={setModalValues} setActive={setActive} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
