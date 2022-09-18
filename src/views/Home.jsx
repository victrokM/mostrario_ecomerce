import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <div>
      <div className="container_home">
        <div className="presentacion">
          <img src="default-image.jpg" alt="" />
          <div className="centrar_ginger">
            <p className="gingle">brilla como el sol</p>
            <p className="present">Conoce nuestros productos</p>
          </div>
        </div>
        <form className="contact_home">
          <p>Contactanos</p>
          <textarea
            name=""
            id=""
            cols="60"
            rows="10"
            placeholder="holi 7w7"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
