import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { SocketProvider } from './socketContext';
import { MainProvider } from './mainContext';
import { UsersProvider } from './usersContext';
import Lobby from './components/Lobby/Lobby';
import Header from './components/Header/Header';
import Welcome from './pages/Welcome/Welcome';
import React from 'react';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <MainProvider>
        <UsersProvider>
          <SocketProvider>
            <Router>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/lobby" component={Lobby} />
              </Switch>
            </Router>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
      <Footer/>
    </div>
  );
};

export default App;
