import React, { useState, useEffect } from "react";
import "./form.css";

const Form = ({ setModalValues, setActive }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [error, setError] = useState(true);
  const [fileName, setFileName] = useState("Choose a file");
  const [firstChar, setFirstChar] = useState("N");
  const [secondChar, setSecondChar] = useState("N");

  useEffect(() => {
    !firstName ? setError(true) : setError(false);
    if (firstName.length > 0) {
      setFirstChar(firstName[0]);
      ;
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName.length > 0) {
      setSecondChar(lastName[0])
    }
  }, [lastName])


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
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
            {error && (
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
