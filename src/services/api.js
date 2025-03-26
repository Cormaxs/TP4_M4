export const API = async (parametros, limite) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(parametros)}`//convierte caracteres especiales en seguros
      );
      if (!res.ok) throw new Error("Personaje no encontrado");
      const result = await res.json();
      console.log(result.info)
      return result.results.slice(0, limite);//results es donde devuelve la api los datos de los personajes
    } catch (err) {
      console.error("Error en la API:", err);
      return null;
    }
  };