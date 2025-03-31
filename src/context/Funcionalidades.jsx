import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const FavoritosContext = createContext();//creo el contexto

export const FavProvider = ({ children }) => { //creo el provider
  const [favoritos, setFavoritos] = useState(() => {//busco si hay favoritos en localstorage
    return JSON.parse(localStorage.getItem("favoritos")) || [];
  });

  //cada ves que favoritos cambie, se actualiza 
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  //cambia de estado los favoritos y surgen las ventanas emergentes
  const toggleFavorito = (character) => {
    setFavoritos((prev) => {
      const existe = prev.some((personaje) => personaje.id === character.id);//uso some para devolver valor booleano
      if (existe) {
        toast.error(`${character.name} eliminado de favoritos!`);//muestro la tarjeta
        return prev.filter((personaje) => personaje.id !== character.id);//devuelvo el nuevo array sin el personaje eliminado
      } else {
        toast.success(`${character.name} agregado a favoritos!`);
        return [...prev, character];//devuelvo el estado anterior mas el nuevo personaje
      }
    });
  };

  return (//paso todo lo que se puede usar
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};