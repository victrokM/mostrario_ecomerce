import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Paginacion(props) {


  const getPages = () => {
    const resultado = [];
    for (let i = 0; i < props.totalPaginas; i++) {
      let pagina = i+1
      resultado.push(
        <Link
          to=""
          className={props.pagina === pagina ? "active" : "pag"}
          onClick={() => props.onChange(pagina)}
        >
          {pagina}
        </Link>
      );
    }
    return resultado;
  };

  return (
    <div>
      <div className="paginacion">
        <span>
          pagina {props.pagina} de {props.totalPaginas}:{" "}
        </span>
        <Link to="" className="pag">
          <FaArrowLeft />
        </Link>
        {getPages()}
        <Link to="" className="pag">
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Paginacion;
