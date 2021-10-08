import './Member-avatar.css';

export default function MemberAvatar({ player }) {
  const createPlaerIcon = () => {
    let abbreviation = '';
    if (player && player.firstName && player.firstName.length) {
      abbreviation += player.firstName[0].toUpperCase();
    } else {
      abbreviation += 'N';
    }
    if (player && player.lastName && player.lastName.length) {
      abbreviation += player.lastName[0].toUpperCase();
    }
    return abbreviation;
  };

  return player.avatar !== undefined ? (
    <img className="member__avatar" src={player.avatar} />
  ) : (
    <p className="member__avatar without-avatar">{createPlaerIcon()}</p>
  );
}
