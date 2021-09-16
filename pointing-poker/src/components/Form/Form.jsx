import React, { useState, useEffect } from "react";
import "./form.css";

function Form({ setModalValues, setActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("Choose a file");
  const [firstChar, setFirstChar] = useState("N");
  const [secondChar, setSecondChar] = useState("N");

  useEffect(() => {
    validate();
  }, [firstName]);
  const validate = () => {
    setErrors({});
    if (firstName === "") {
      setErrors((state) => ({ ...state, firstName }));
    }
  };

  useEffect(() => {
    if (firstName.length > 0) {
       setSecondChar("")
      setFirstChar(firstName[0]);
     ;
    }
  }, [firstName])

  useEffect(() => {
    if (lastName.length > 0) {
      setSecondChar(lastName[0])
    }    
  }, [lastName])


  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      setModalValues((state) => [
        ...state,
        { firstName, lastName, jobPosition },
      ]);
    }
  };


  const reset = () => {
    setActive(false);
    setFirstName("");
    setLastName("");
    setJobPosition("");
    setFileName("Choose a file");
    setFirstChar("N");
    setSecondChar("N");
  };

  return (
    <>
    <div className="overlay" onClick={() => reset()} ></div>
    <form onSubmit={handleSubmit}>
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
            <span className="input-file">{fileName}</span>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="group-input file"
            onChange={(event) => setFileName(event.target.files[0].name)}
          />
          <button className="button">Button</button>{" "}
        </div>
        <div className="avatar">{firstChar}{secondChar}
        </div>
      </div>
      <div className="form-buttons">
        <input type="submit" value="Confirm" className="button button-blue" />
        <input
          type="submit"
          value="Cancel"
          className="button  button-white"
          onClick={() => reset()}
        />
      </div>
    </form>
   </>
  );
}

export default Form;
