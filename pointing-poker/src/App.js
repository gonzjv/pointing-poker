import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { SocketProvider } from './socketContext';
import Login from './components/Login/Login';
import { MainProvider } from './mainContext';
import Lobby from './components/Lobby/Lobby';

function App() {
  return (
    <MainProvider>
      <SocketProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/lobby" component={Lobby} />
          </Switch>
        </Router>
      </SocketProvider>
    </MainProvider>
  );
}

export default App;
