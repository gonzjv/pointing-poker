import "./Member-avatar.css";

export default function MemberAvatar(props) {
  return props.avatar !== "" ? (
    <img className="member__avatar" src={props.avatar} />
  ) : (
    <p className="without-avatar">WN</p>
  );
}
