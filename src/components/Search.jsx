import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import "../css/Search.css";
function Search({ handleSearch }) {
  let [search, setSearch] = useSearchParams();

  const handleChange = (e) => {
    console.log(e.target.value);
    let filter = e.target.value;
    if (filter) {
      setSearch({ filter });
    } else {
      setSearch({});
    }
  };

  return (
    <div>
      <div className="buscar">
        <input
          type="text"
          placeholder="Buscar"
          className="input_buscar"
          value={search.get("filter") || ""}
          onChange={handleChange}
        />
        <button
          className="btn_Buscar"
          onClick={() => handleSearch(search.get("filter") || "")}
        >
          <FaSearch className="lupa" />
        </button>
      </div>
    </div>
  );
}

export default Search;
