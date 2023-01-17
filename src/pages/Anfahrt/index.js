import React from "react";

import './styles.scss';

const Anfahrt = () => {
    return (
       <section className="anfahrt">
        <h2>Cornelia Altmann: Jägerstraße 17, 38820 Halberstadt </h2>
        <div className="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11914.910151999677!2d11.045773!3d51.888334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x755b2dcb03bfb56d!2sCornelia%20Altmann!5e1!3m2!1sde!2sde!4v1673631821705!5m2!1sde!2sde" 
                width="800" 
                height="500" 
                title="mapAnfahrt" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        
       </section>
    )
}

export default Anfahrt;