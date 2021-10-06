import React, { useState, useEffect, useContext } from 'react';
import './form-start-game.css';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { UsersContext } from '../../usersContext';
import { SocketContext } from '../../socketContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormStartGame = ({ setActive }) => {
  const socket = useContext(SocketContext);
  const {
    firstName,
    lastName,
    jobPosition,
    setFirstName,
    setLastName,
    setJobPosition,
    setLobbyID,
  } = useContext(MainContext);
  const history = useHistory();
  const { setDealer } = useContext(UsersContext);

  const [fileName, setFileName] = useState('Choose a file');
  const [firstChar, setFirstChar] = useState('N');
  const [secondChar, setSecondChar] = useState('N');

  useEffect(() => {
    if (firstName.length > 0) {
      setFirstChar(firstName[0]);
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName.length > 0) {
      setSecondChar(lastName[0]);
    }
  }, [lastName]);

  useEffect(() => {
    socket.on('dealer', (dealer) => {
      setDealer(dealer);
      setLobbyID(dealer.lobbyID);
    });
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
              onChange={(event) => setFileName(event.target.files[0].name)}
              onClick={(event) => {
                setFileName('Choose your file');
              }}
            />
            <button className="button">Button</button>
          </div>
        </div>
        <div className="avatar">
          {firstChar}
          {secondChar}
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
};

export default FormStartGame;
