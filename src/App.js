import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Footer from './Footer';
import SearchPage from './SearchPage';

import { Route, Switch } from 'react-router'
import {BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
