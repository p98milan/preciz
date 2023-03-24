import React from 'react';
import '../styles/Menu.css';
import Gyermekliget from '../downloadable/gyermekliget.pdf';
import AltIsk from '../downloadable/altalanos-iskola.pdf';
import Kodaly from '../downloadable/kodaly.pdf';
import Kozepiskola from '../downloadable/kozepiskola.pdf';
import Tancsics from '../downloadable/tancsics.pdf';
import Felnott from '../downloadable/felnott.doc';

const Menu = () => {


  return (


    <div className="menu">
      <h1>Étlap</h1>
      <h2>Házias ízekkel várjuk Önöket éttermünkben, a Katona József tér 8. szám alatt!</h2>
      <div className="menu-container">
      <div className='menu-download'>
        <h3>Felnőtt <strong>2023.03.20-24.</strong></h3>
        <a href={Felnott} download={Felnott}>Letöltés</a>
      </div>

      <div className='menu-download'>
        <h3>Gyermekliget óvoda, iskola <strong>2023.03.20-24.</strong></h3>
        <a href={Gyermekliget} download={Gyermekliget}>Letöltés</a>
      </div>

      <div className='menu-download'>
        <h3>Általános iskola <strong>2023.03.20-24.</strong></h3>
        <a href={AltIsk} download={AltIsk}>Letöltés</a>
      </div>

      <div className='menu-download'>
        <h3>Kodály Zoltán iskola <strong>2023.03.20-24.</strong></h3>
        <a href={Kodaly} download={Kodaly}>Letöltés</a>
      </div>

      <div className='menu-download'>
        <h3>Középiskola <strong>2023.03.20-24.</strong></h3>
        <a href={Kozepiskola} download={Kozepiskola}>Letöltés</a>
      </div>

      <div className='menu-download'>
        <h3>Táncsics kollégium <strong>2023.03.20-24.</strong></h3>
        <a href={Tancsics} download={Tancsics}>Letöltés</a>
      </div>
      </div>

    </div>
  )
}

export default Menu;