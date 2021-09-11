import React, { useState, useEffect } from "react";
import "./form.css";
import axios from "axios";

function Form({ setModalValues, setActive }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("Choose a file");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    validate();
  }, [firstName]);
  const validate = () => {
    setErrors({});
    if (firstName === "") {
      setErrors((state) => ({ ...state, firstName }));
    }
  };

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
  };

  const setAvatar = (e) => {
    setFileName(e.target.files[0].name);
    // setSelectedFile(e.target.files[0]);
  };

  // const uploadAvatar = () => {
  //   console.log('hi there');
  //   axios.post('')
  //   console.log(selectedFile);

  // }

  return (
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
            //  onChange={(e) => setFileName(e.target.files[0].name)}
            onChange={setAvatar}
          />
          <button className="button">Button</button>{" "}
          {/*onClick={uploadAvatar}*/}
        </div>
        <div className="avatar">
          <img src="images/avatar.png" alt="avatar"></img>
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
  );
}

export default Form;
