import ButtonKick from "./button-Kick/Button-kick";
import MemberAvatar from "./member-avatar/Member-avatar";
import "./Member-card.css";

export default function MemberCard(props) {
  return (
    <div className="member__card">
      <MemberAvatar avatar={props.member.avatar} />
      <div className>
        <p className="member__name">
          {props.member.name}
          <span className="member__position">{props.member.position}</span>
        </p>
      </div>
      <ButtonKick />
    </div>
  );
}
