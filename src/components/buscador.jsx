import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Cards } from "./cards";
import { API } from "../services/api";

export const Buscador = () => {
  const [parametros, setParametros] = useState("rick");//estado para las busquedas
  const [resultados, setResultados] = useState(20); //muestra los resultados
  const [respuesta, setRespuesta] = useState([]);
  const [carga, setCarga] = useState(false);
  const [error, setError] = useState(null);

  const Captura = async (e) => {
    e.preventDefault();
    setCarga(true);
    setError(null);
    setRespuesta([]);
    const data = await API(parametros, resultados);
    if (data) {
      setRespuesta(data);
    } else {
      setError("No se encontraron personajes");
    }
    setCarga(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form onSubmit={Captura} className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-auto flex-grow">
          <input
            type="text"
            placeholder="Busca tu personaje favorito"
            value={parametros}
            onChange={(e) => setParametros(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        </div>

        <input
          type="number"
          placeholder="Cantidad de resultados"
          value={resultados}
          onChange={(e) => setResultados(Number(e.target.value))}
          className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          min={1}
          required
        />

        <button type="submit" className="w-full md:w-auto px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
          <i className="bi bi-search mr-2"></i>
          Buscar
        </button>
      </form>

      {carga && (
        <div className="flex justify-center mt-4">
          <i className="bi bi-arrow-repeat animate-spin text-green-500 text-3xl"></i>
        </div>
      )}

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

      <Cards personajes={respuesta} />
    </div>
  );
};