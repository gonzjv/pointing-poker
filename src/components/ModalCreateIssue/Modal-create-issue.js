import Button from '../Button/Button';
import ModalKickPlayer from '../ModalKickPlayer/Modal-kick-player';
import './modal-create-issue.css';

const ModalCreateIssue = ({ active }) => {
  return (
    <div className={active ? 'modal__kick modal__kick-active' : 'modal__kick'}>
      <form className="form__create">
        <h3 className="form__create__title">Create Issue</h3>
        <div>
          <label for="form__create__title" className="form__create__label">
            Title:
          </label>
          <input type="text" id="form__create__title" />
        </div>
        <div>
          <label for="form__create__link" className="form__create__label">
            Link:
          </label>
          <input type="text" id="form__create__link" />
        </div>
        <div>
          <label className="form__create__label" for="form__create__prority">
            Priority:
          </label>
          <select className="form__create__priority" id="form__create__prority">
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
