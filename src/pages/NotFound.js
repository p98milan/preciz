import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1>Ajjaj...Az a fránya 404-es hiba! 😡 A keresett fájl nem található!</h1>
        <Link to="/">Vissza a kezdőoldalra</Link>
    </div>
  )
}

export default NotFound;