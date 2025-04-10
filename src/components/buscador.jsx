import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Cards } from "./cards";
import { API } from "../services/api";

export const Buscador = () => {
  const [parametros, setParametros] = useState("");//estado para las busquedas
  const [resultados, setResultados] = useState(20); //cantidad de resultados
  const [respuesta, setRespuesta] = useState({ info: {}, results: [] });//almacena datos de la api
  const [carga, setCarga] = useState(false);//controla si esta cargando la peticion
  const [error, setError] = useState(null);//guarda los errores
  const [paginaActual, setPaginaActual] = useState(1) //pagina actual para la paginacion

  //hace una llamada aparte
  const llamada = async () => {
    const exepcion = await API(parametros, paginaActual);
    setRespuesta(exepcion);//guarda la llamada en donde usa CArds para renderizar
  }
  //se aplica la llamada al renderizar el componente
  useEffect(() => {
    llamada()
  }, [paginaActual]) //cuando cambia la pagina actual vuelve a llamar a la api

  const Captura = async (e) => {//captura lo que escribo
    e.preventDefault();//previene el envio del form
    setRespuesta([]);//vacia las respuestas anteriores
    setError(null);//limpia errores anteriores
    setCarga(true);//muestra el loader
    setPaginaActual(1)
    const data = await API(parametros, 1);//llamo a la api
    if (data) {
      setRespuesta(data);//si hay datos los guarda 
    } else {
      setError("No se encontraron personajes");//si no hay datos manda error
    }
    setCarga(false);//saca el loader
  };
  //retorna el buscador
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/*solo envia cuando apreto buscar */}
      <form onSubmit={Captura} className="w-full max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-auto flex-grow">
          <input
            type="text"
            placeholder="Busca tu personaje favorito"
            value={parametros}
            onChange={(e) => setParametros(e.target.value)}  //captura lo que escribo actualizando el estado 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          // required
          />
          <i className="bi bi-search text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"></i>
        </div>

        <input
          type="number"
          placeholder="Cantidad de resultados"
          value={resultados}
          onChange={(e) => setResultados(Number(e.target.value))} //captura y transforma en numero
          className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          min={1}
          required
          disable="true"
        />

        <button type="submit" className="w-full md:w-auto px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
          <i className="bi bi-search mr-2"></i>
          Buscar
        </button>
      </form>

      {/*loader*/}
      {carga && (
        <div className="flex justify-center mt-4">
          <i className="bi bi-arrow-repeat animate-spin text-green-500 text-3xl"></i>
        </div>
      )}

      {/*error si no encontro nada */}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}


      {respuesta?.info && (

        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))} //resta 1 a la pagina actual
            // disabled={paginaActual === 1} //desactiva el boton si es la primera pagina
            disabled={!respuesta.info.prev} //desactiva el boton si es la primera pagina
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50"
          >
            Anterior
          </button>

          <p className="text-gray-700 font-semibold text-center">
            Página { }{paginaActual} de {respuesta.info.pages}
          </p>

          <button
            onClick={() => setPaginaActual((prev) => prev + 1)} //resta 1 a la pagina actual
            // disabled={paginaActual === 1} //desactiva el boton si es la primera pagina
            disabled={!respuesta.info.next} //desactiva el boton si es la primera pagina
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50"
          >
            Siguiente
          </button>

        </div>
      )}



      <Cards personajes={respuesta.results} />
    </div>
  );
};