import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { SocketProvider } from './socketContext';
import { MainProvider } from './mainContext';
import { UsersProvider } from './usersContext';
import { LobbyProvider } from './components/Lobby/LobbyContext';
import Lobby from './components/Lobby/Lobby';
import Header from './components/Header/Header';
import Welcome from './pages/Welcome/Welcome';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { GamePage } from './pages/GamePage/GamePage';

const App = () => {
  return (
    <div className="page-wrapper">
      <LobbyProvider>
        <Header />
        <MainProvider>
          <UsersProvider>
            <SocketProvider>
              <Router>
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/lobby" component={Lobby} />
                  <Route exact path="/game" component={GamePage} />
                </Switch>
              </Router>
            </SocketProvider>
          </UsersProvider>
        </MainProvider>
      </LobbyProvider>
    </div>
  );
};

export default App;
