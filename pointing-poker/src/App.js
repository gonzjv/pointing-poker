import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { SocketProvider } from './socketContext';
import Login from './components/Login/Login';
import { MainProvider } from './mainContext';
import { UsersProvider } from './usersContext';
import Lobby from './components/Lobby/Lobby';
import Header from './components/Header/Header';
import Welcome from './pages/Welcome/Welcome';


const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <MainProvider>
        <UsersProvider>
          <SocketProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/lobby" component={Lobby} />
              </Switch>
            </Router>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
      <Welcome />
    </div>
  );
}

export default App;
