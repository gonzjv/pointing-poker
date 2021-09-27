import Button from '../Button/Button';
import './modal-kick-player.css';

const ModalKickPlayer = ({ active, setActive, name }) => {
  const closeModalKick = () => {
    setActive(false);
  };
  return (
    <div className={active ? 'modal__kick modal__kick-active' : 'modal__kick'}>
      <div className="form__kick__player">
        <h3 className="form__kick__title"> Kick player?</h3>
        <p className="form__kick__text">
          Are you really want to remove playe{' '}
          <span className="form__kick__name">{name}</span> from game session?
        </p>
        <Button value="Yes" />
        <Button value="No" isWhite={true} onCustomClick={closeModalKick} />
      </div>
    </div>
  );
};

export default ModalKickPlayer;
