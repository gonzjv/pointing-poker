import ButtonKick from "./button-Kick/Button-kick";
import MemberAvatar from "./member-avatar/Member-avatar";
import "./Member-card.css";

export default function MemberCard(props) {
  const checkYourself = () => {
    return props.member.isYou ? (
      <span className="yourself__marker">it's you</span>
    ) : (
      ""
    );
  };

  

  return (
    <div className="member__card">
      <MemberAvatar avatar={props.member.avatar} />
      <div>
        <p className="member__name">
          {checkYourself()}
          {props.member.name}
          <span className="member__position">{props.member.position}</span>
        </p>
      </div>
      {props.btnKick === true ? <ButtonKick /> : '' } 
    </div>
  );
}
