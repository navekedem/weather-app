import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {

    return <header className="app-header flex flex-row justify-between bg-gray-500 shadow-md">
        <div className="app-header-title">
            <h1>Abra Weather App</h1>
        </div>
        <div className="app-header-btns inline-flex">
            <Link to="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Home</Link>
            <Link to="/favourites" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Favourites</Link>
        </div>
    </header>
}


