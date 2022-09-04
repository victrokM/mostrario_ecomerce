import React from 'react'
import '../css/Card.css'

function Card({id, title}) {

  console.log(id)

  return (
    <>
      
      <div className="card">
        <img src="https://decorceramica.vteximg.com.br/arquivos/ids/179767-960-960/ceramica-pisos-marmol-fiori-catena-38x75-beige-fr04be172.jpg?v=637655911462100000" alt="" />
        <div className="card_text">
          <div className="descripcion">{title}</div>
          <div className="precio_stock">
            <div className="precio">{id*150} m²</div>
            <div className="stock">X {id} m²</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card