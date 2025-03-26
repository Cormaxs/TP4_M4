import React, { useContext, useState, useRef, useEffect } from "react";
import { FavoritosContext } from "../context/Funcionalidades";

export const Cards = ({ personajes }) => {
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);//importo desde context lo que voy a usar
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);//oculta o no los favoritos
  const panelRef = useRef(null);//crea una referencia mutable, detecta clicks feura del panel de favoritos

  const togglePestanaFavoritos = () => setMostrarFavoritos((prev) => !prev);//alterna los estados true o false de mostrar favoritos

  //cierra la pestaña al hacer click afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) { //si toco fuera del panel se cierra
        setMostrarFavoritos(false);//cambia directamente el estado
      }
    };
    document.addEventListener("mousedown", handleClickOutside);//detecta clicks 
    return () => document.removeEventListener("mousedown", handleClickOutside);//desactiva si hay clicks se cierre
  }, []);

  return (
    <div> {/*container*/}

    {/*boton de favoritos*/}
      <button 
        onClick={togglePestanaFavoritos}
        className="fixed top-2 right-15 bg-green-500/60 hover:bg-green-500/80 text-white p-3 rounded-[10px] text-lg shadow-lg z-50 cursor-pointer"
      >
        <i className="bi bi-heart-fill"> {favoritos.length }</i>
      </button>
    {/*renderiza favoritos*/}
      {mostrarFavoritos && ( 
        <div className="fixed inset-0 bg-black/50 flex justify-end z-40">
          {/*uso ref para detectar clicks fuera*/}
          <div ref={panelRef} className="bg-gray-900 w-full max-w-md p-6 overflow-y-auto mt-16 rounded-l-lg shadow-2xl border-l-4 border-green-400">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-green-400">Favoritos</h3>
              <button onClick={togglePestanaFavoritos} className="text-gray-400 hover:text-green-400 text-2xl transition-colors duration-300 cursor-pointer">
                &times;{/*muestra la x de multiplicacion*/}
              </button>
            </div>

{/*renderiza los favoritos*/}
            <div className="flex flex-wrap gap-4">
              {favoritos.length > 0 ? (
                favoritos.map((fav) => (
                  <div key={fav.id} className="bg-gray-800 rounded-lg px-2 py-5 w-full sm:w-[48%] lg:w-[30%] relative hover:scale-105 hover:shadow-green-400/20 transition-all duration-300 cursor-pointer group">
                    <button onClick={() => toggleFavorito(fav)} className="absolute top-0 left-0 cursor-pointer w-full bg-red-500/60 hover:bg-red-600/80 text-white px-2 py-1 rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-300 text-sm font-semibold text-center">
                      Eliminar
                    </button>
                    <img src={fav.image} alt={fav.name} className="w-full rounded-full mb-2 pt-4" />
                    <h4 className="text-lg font-semibold text-white">{fav.name}</h4>
                    <p className="text-sm text-gray-300">{fav.species}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No hay personajes en favoritos.</p>
              )}
            </div>
          </div>
        </div>
      )}

{/*renderiza los recultados de busqueda */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {personajes.map((char) => {
          {/*almacena los favoritos usando some para poner true o false por id*/}
          const esFavorito = favoritos.some((fav) => fav.id === char.id);
          return (
            <div key={char.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 relative">
              <button onClick={() => toggleFavorito(char)} className="absolute top-10 right-11 bg-gray-500/60 hover:bg-white p-2 text-2xl rounded-full transition-colors duration-300 cursor-pointer">
                <i className={`bi ${esFavorito ? "bi-heart-fill" : "bi-heart"} text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500`}></i>
              </button>

              <img src={char.image} alt={char.name} className="w-full object-scale-down rounded-t-lg" />

              <div className="p-4 border-b border-gray-700">
                <h3 className="font-bold text-2xl text-white mb-2">{char.name}</h3>
                <p className={`text-sm font-semibold ${char.status === "Alive" ? "text-green-400" : "text-red-400"}`}>
                  ● {char.status} - {char.species}
                </p>
              </div>

              <div className="p-4 text-white">
                <p className="text-gray-300 text-sm mb-2">
                  <span className="font-semibold">🌍 Última ubicación:</span> {char.location.name}
                </p>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold">📺 Primera aparición:</span> {char.origin.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};