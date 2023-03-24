import React from 'react';
import '../styles/Ceremony.css';
import { motion } from 'framer-motion';
import cake from '../assets/cake.jpg';
import dance from '../assets/dance.jpg';
import decoration from '../assets/decoration.jpg';
import fireworks from '../assets/fireworks.jpg';
import flower from '../assets/flower.jpg';
import invite from '../assets/invite.jpg';
import music from '../assets/music.jpg';
import laugh from '../assets/laugh.jpg';
import photo from '../assets/photo.jpg';
import transport from '../assets/transport.jpg';
import wedding from '../assets/wedding.jpg';
import video from '../assets/video.jpg';

const Ceremony = () => {
  return (

    <div className='ceremony'>
        <h1>Rendezvények</h1>
        <p>Az esküvői szolgáltatások széles skálája. Érdeklődjön elérhetőségeinken!</p>

        <div className="ceremony-cards">
            <div className="card">
                <img src={wedding} alt="esküvőszervezés" />
                <p>Esküvőszervezés</p>
            </div>
            <div className="card">
                <img src={invite} alt="meghívó" />
                <p>Meghívó</p>
            </div>
            <div className="card">
                <img src={flower} alt="virág" />
                <p>Virág</p>
            </div>
            <div className="card">
                <img src={decoration} alt="dekoráció" />
                <p>Dekoráció</p>
            </div>
            <div className="card">
                <img src={transport} alt="szállítás" />
                <p>Szállítás</p>
            </div>
            <div className="card">
                <img src={music} alt="zene" />
                <p>Zene</p>
            </div>
            <div className="card">
                <img src={laugh} alt="szórakoztatás" />
                <p>Szórakoztatás</p>
            </div>
            <div className="card">
                <img src={photo} alt="fénykép" />
                <p>Fénykép</p>
            </div>
            <div className="card">
                <img src={video} alt="videó" />
                <p>Videó</p>
            </div>
            <div className="card">
                <img src={dance} alt="táncoktatás" />
                <p>Táncoktatás</p>
            </div>
            <div className="card">
                <img src={cake} alt="torta" />
                <p>Torta</p>
            </div>
            <div className="card">
                <img src={fireworks} alt="tűzijáték" />
                <p>Tűzijáték</p>
            </div>
        </div>
    </div>
  )
}

export default Ceremony;