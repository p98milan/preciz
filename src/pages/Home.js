import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroVid from '../assets/home.mp4';

const Home = () => {
    return (

        <div className="home">
            <video autoPlay loop muted id="video">
                <source src={HeroVid} type='video/mp4' />
            </video>
            <div className="home-container">
                <h1>Precíz Élelmezés</h1>
                <p>Cégünk a Bács-Kiskun Megyei Vendéglátó Vállalat egyik utódjaként 1990 óta folytatja Kecskeméten a diákétkeztetést. Közel 2500-3000 főt látunk el napi egyszeri vagy többszöri étkezéssel. Ma már minden korosztály részére készítünk ételt a bölcsődésektől a nyugdíjasokig. A közétkeztetési konzorcium pályázatában mi vállaltuk, hogy Kecskemét város több általános- és középiskoláját ellátjuk diétás ebéddel.</p>

                <Link to='/menu'><button>Étlapok</button></Link>
            </div>
        </div>


    )
}

export default Home;