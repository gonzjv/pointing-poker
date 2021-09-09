import React, { useState, useEffect } from "react";
import "./form.css";
import PropTypes from "prop-types";

Form.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func
}


function Form({ setFormValues, active, setActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate();
  }, [firstName]);
  const validate = () => {
    setErrors({});
    if (firstName === "") {
      setErrors((state) => ({ ...state, firstName }));
    }
    console.log(errors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValues((state) => [
        ...state,
        { firstName, lastName, jobPosition },
      ]);
    }
    console.log(firstName);
    console.log(lastName);
    console.log(jobPosition);
  };

  const reset = () => {
    setActive(false);
    setFirstName("");
    setLastName("");
    setJobPosition("")  
  }

  return (
    <>
      <section className="popup">

      <div className={active ? "modal active" : "modal" } onClick={() => reset()}>
        <div className="popup_content">
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
        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} >
          <div className="group">
            <label className="group-input" htmlFor="first-name">
              Your first name:
              {errors?.firstName === "" && (
                <span className="form-validation">Enter your name</span>
              )}
            </label>
            <input
              type="text"
              name="first-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div className="group">
            <label className="group-input" htmlFor="last-name">
              Your last name (optional):
            </label>
            <input
              type="text"
              name="first-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="group">
            <label className="group-input" htmlFor="job-position">
              Your job posititon (optional):
            </label>
            <input
              type="text"
              name="job-position"
              value={jobPosition}
              onChange={(event) => setJobPosition(event.target.value)}
            />
          </div>
          <div className="group">
            Image:
            <div className="group file">
              <label htmlFor="file" className="group-input">
                <span className="input-file">Choose a file</span>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="group-input file"
              />
              <button className="button">Button</button>
            </div>
            <div className="avatar">
              <img src="images/avatar.png" alt="avatar"></img>

            </div>
          </div>
          <div className="form-buttons">
            <input type="submit" value="Confirm" className="button button-blue" />
            <input type="submit" value="Cancel" className="button  button-white" onClick={() => reset()}/>
          </div>
        </form>
        </div>
        </div>
      </section>
    </>
  );
}

export default Form;
