/**hooks*/
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";
/**componentes*/
import Aside from "../components/Aside";
import Card from "../components/Card";
import Loading from "./Loading";
import Paginacion from "../components/Paginacion";
import Search from "../components/Search";
/** estilos y iconos*/
import "../css/Baños.css";

function Casa() {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [paginaActual, setPaginaActual] = useState(1);
  const [filtro, setFiltro] = useState("");
  const TotalXPagina = 12;

  let filtrado = data.filter((item) => {
    if (!filtro) {
      return true;
    }
    let title = item.title.toLowerCase();
    return title.startsWith(filtro.toLowerCase());
  });

  let ceramica = filtrado.slice(
    (paginaActual - 1) * TotalXPagina,
    paginaActual * TotalXPagina
  );

  const totalPaginas = Math.ceil(ceramica.length / TotalXPagina);
  const totalTotal = Math.ceil(data.length / TotalXPagina);

  if (loading) {
    return <Loading />;
  }

  if (error !== "") {
    return <p>{error}</p>;
  }

  const handleSearch = (e) => {
    setFiltro(e);
  };

  return (
    <div>
      <div className="container_bathrooms">
        <Aside categorias="" className="aside" />
        <div className="container_card_search">
          <Search handleSearch={handleSearch} />
          <div className="container_cards">
            {ceramica.map((item) => (
              <Link to={`Productos/${item.id}`}>
                <Card id={item.id} title={item.title} />
              </Link>
            ))}
          </div>
          <Paginacion
            pagina={paginaActual}
            totalPaginas={filtro === "" ? totalTotal : totalPaginas}
            onChange={(pagina) => {
              setPaginaActual(pagina);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Casa