import MemberCard from "./Member-card/Member-card";
import "./Members.css";

const memberInfo = {
  avatar: "",
  name: "Rick Gilian",
  position: "Junior front-end dev",
};

export default function Members() {
  return (
    <div className="members">
      <div className="wrapper">
        <h2 className="members__title">members:</h2>
        <div className="members__list">
          <MemberCard member={memberInfo} />
          <MemberCard member={memberInfo} />
          <MemberCard member={memberInfo} />
          <MemberCard member={memberInfo} />
          <MemberCard member={memberInfo} />
          <MemberCard member={memberInfo} />
        </div>
      </div>
    </div>
  );
}
