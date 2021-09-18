import "./lobby-page.css";
import GameInfo from "./game-info/game-info";
import IssuesList from "./issues/issues";
import Members from "./members/Members";
import Settings from "./settings/settings";
import Card from "../card/card";

const cardInfo = {
  value: "5",
  type: "SP",
};

export default function lobbyPage() {
  return (
    <div className="wrapper">
      <GameInfo />
      <Members />
      <IssuesList />
      <Settings />
      <Card card={cardInfo} />
    </div>
  );
}
