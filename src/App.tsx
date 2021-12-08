import React from 'react';
import { Header } from './components/header/header'
import './App.css';
import {BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import { Home } from './components/home/home';
import { Favourites } from './components/favourites/favourites';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes >
            <Route path="/favourites"  element={<Favourites />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes >
        </main>
      </Router>
    </div>
  );
}

export default App;
