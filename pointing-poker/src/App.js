import "./App.css";
import GameInfo from "./components/game-info/game-info";
import IssuesList from "./components/issues/issues";
import Members from "./components/members/Members";
import Settings from "./components/settings/settings";

function App() {
  return (
    <div className="wrapper">
      <GameInfo />
      <Members />
      <IssuesList />
      <Settings />
    </div>
  );
}

export default App;
