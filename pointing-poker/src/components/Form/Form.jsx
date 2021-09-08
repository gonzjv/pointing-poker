import React, { useState, useEffect} from 'react';
import './form.css'

function Form({ setFormValues }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validate()  
  }, [firstName])
  const validate = () => {
    setErrors({});
    if (firstName === '') {
      setErrors((state) => ({ ...state, firstName }));
    };
    console.log(errors)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
    setFormValues((state) => [...state, {firstName, lastName, jobPosition},
    ])
  }
    console.log(firstName);
    console.log(lastName);
    console.log(jobPosition);
  }

  return (
    <>
      <section className="popup">
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label className="group-input" htmlFor="first-name">Your first name:
            {errors?.firstName === "" && <span className="form-validation">Enter your name</span>}
            </label>
            <input type="text" name="first-name" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
          </div>
          <div className="group">
            <label className="group-input" htmlFor="last-name">Your last name (optional):</label>
            <input type="text" name="first-name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </div>
          <div className="group">
            <label className="group-input" htmlFor="job-position">Your job posititon (optional):</label>
            <input type="text" name="job-position" value={jobPosition} onChange={(event) => setJobPosition(event.target.value)} />
          </div>
          <div className="group" >
            <label className="group-input img" htmlFor="file">Image:</label>
            <input type="file" id="image" />
            <button className="button">Button</button>
          </div>
          <div className="button">
            <input type="submit" value="Confirm" />
          </div>
        </form>
      </section>


    </>
  )
}

export default Form;