import React from "react";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5"
import '../css/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <p className="social_media">Redes Sociales</p>
        <div className="container_footer">
          <div className="redes">
            <button className="facebook">
              <BsFacebook />
            </button>
            <button className="whatsapp">
              <BsWhatsapp />
            </button>
            <button className="whatsapp">
              <BsWhatsapp />
            </button>
          </div>
          <div className="dir">
            <div className="gps">
              <p>Dirección</p>
              <IoLocationSharp className="location"/>
            </div>
            <div className="phone">
              <p>Teléfono: 3148357090</p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
