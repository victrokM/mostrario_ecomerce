import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import Loading from "./Loading";

function Productos() {
  let params = useParams();
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error !== "") {
    return <h1> error no joda compae</h1>;
  }

  return (
    <div>
      <div className="container_producto">
        <div className="container_img">
          <img
            src="https://decorceramica.vteximg.com.br/arquivos/ids/179767-960-960/ceramica-pisos-marmol-fiori-catena-38x75-beige-fr04be172.jpg?v=637655911462100000"
            alt=""
          />
        </div>
        <div className="titulo_producto">
          <h1>{data.title}</h1>
        </div>
        <div className="descripcion_producto">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Productos;
