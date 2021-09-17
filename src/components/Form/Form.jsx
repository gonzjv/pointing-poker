import React, { useState, useEffect, useContext } from 'react';
import './form.css';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { UsersContext } from '../../usersContext';
import { SocketContext } from '../../socketContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ setActive }) {
  const socket = useContext(SocketContext);
  const {
    firstName,
    lastName,
    jobPosition,
    setFirstName,
    setLastName,
    setJobPosition,
  } = useContext(MainContext);
  const history = useHistory();
  const { dealer, setDealer } = useContext(UsersContext);

  const [fileName, setFileName] = useState('Choose a file');

  useEffect(() => {
    socket.on('dealer', (dealer) => {
      setDealer(dealer);
    });
    console.log('dealer in Form: ', dealer);
  });

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('createGame', { firstName, lastName, jobPosition }, (error) => {
      if (error) {
        return notify(error);
      }
      history.push('/lobby');
    });
  };

  const reset = () => {
    setActive(false);
    setFirstName('');
    setLastName('');
    setJobPosition('');
    setFileName('Choose a file');
  };

  const setAvatar = (e) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <>
      <div className="overlay" onClick={() => reset()}></div>
      <form onSubmit={handleSubmit}>
        <div className="group">
          <label className="group-input" htmlFor="first-name">
            Your first name:
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
              onChange={setAvatar}
            />
            <button className="button">Button</button>{' '}
          </div>
          <div className="avatar">NN</div>
        </div>
        <div className="form-buttons">
          <ToastContainer />
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
