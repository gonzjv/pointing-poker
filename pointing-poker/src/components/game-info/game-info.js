import MemberCard from "../members/Member-card/Member-card";
import "./game-info.css";

const scramInfo = {
  avatar: "",
  name: "Rick Gilian",
  position: "Junior front-end dev",
  isYou: true,
};

export default function GameInfo() {
  return (
    <div className="game-info">
      <h2 className="title game-info__title">
        Spring 23 planning (issues 13, 533, 5623, 3252, 6623, ...)
      </h2>
      <div className="scram-master">
        <p>Scram master: </p>
        <MemberCard member={scramInfo} />
      </div>
      <div className="link">
        <p>Link to lobby:</p>
        <div className="link__text">
          http://pockerplanning.com/game176587/lobby
        </div>
        <button>Copy</button>
      </div>
      <button>Start Game</button>
      <button className="button__close">Cansel game</button>
    </div>
  );
}
