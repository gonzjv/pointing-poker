import "./Member-avatar.css";

export default function MemberAvatar(props) {
  return props.avatar !== "" ? (
    <img className="avatar member__avatar" src={props.avatar} />
  ) : (
    <p className="avatar without-avatar">WN</p>
  );
}
