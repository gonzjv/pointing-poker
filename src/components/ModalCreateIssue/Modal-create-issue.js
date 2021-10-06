import Button from '../Button/Button';
import './modal-create-issue.css';
import React, { useState, useContext } from 'react';
import { SocketContext } from '../../socketContext';
import { MainContext } from '../../mainContext';
import { toast } from 'react-toastify';

const ModalCreateIssue = () => {
  const socket = useContext(SocketContext);
  const { lobbyID, modalIssue, setModalIssue } = useContext(MainContext);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [priority, setPriority] = useState('');

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('addIssue', { lobbyID, title, link, priority }, (error) => {
      if (error) {
        return notify(error);
      }
      setModalIssue(false);
    });
  };
  return (
    <div className={modalIssue ? 'modal__kick modal__kick-active' : 'modal__kick'}>
      <form
        className="form__create"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <h3 className="form__create__title">Create Issue</h3>
        <div>
          <label for="form__create__title" className="form__create__label">
            Title:
          </label>
          <input
            type="text"
            id="form__create__title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="form__create__link" className="form__create__label">
            Link:
          </label>
          <input
            type="text"
            id="form__create__link"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="form__create__label" for="form__create__prority">
            Priority:
          </label>
          <select
            className="form__create__priority"
            id="form__create__prority"
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option>Low </option>
            <option>Middle </option>
            <option>High </option>
          </select>
        </div>
        <Button value="Yes" />
        <Button value="No" isWhite={true} />
      </form>
    </div>
  );
};

export default ModalCreateIssue;
