import './Button-kick.css';

export default function ButtonKick({ setActive, member, setPlayerNameKick }) {
  return (
    <button
      className="button__kick"
      onClick={() => {
        setActive(true);
        setPlayerNameKick(member.firstName + ' ' + member.lastName);
      }}
    >
      <img src="./icon/kick-icon.svg" />
    </button>
  );
}
