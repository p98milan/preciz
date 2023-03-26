import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (

    <div className='contact'>
        <h1>Kapcsolat</h1>
        <div className='contact-container'>
            <form action="" method="post">
                <label>Név</label>
                <input type="text" placeholder='Írja be a nevét...' />

                <label>Telefonszám</label>
                <input type="tel" placeholder='Pl. +3630... vagy 0630...' />

                <label>E-mail cím</label>
                <input type="email" placeholder='Írja be email címét...'/>

                <label>Milyen ügyben keres minket?</label>
                <textarea cols="30" rows="20" placeholder='Foglalja össze röviden, miben lehetünk segítségére...'></textarea>

                <button type="submit">Küldés</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;