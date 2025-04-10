export const API = async (parametros = "", pagina = 1) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(parametros)}&page=${pagina}`//convierte caracteres especiales en seguros %%
      );
      const result = await res.json();
      // return result.results.slice(0, limite);//results es donde devuelve la api los datos de los personajes, slice devuelve un nuevo array desde posicion 0 hasta el limite
      return {
        info: result.info,
        results: result.results
      }
    } catch (err) {
      console.error("Error en la API:", err);
      return null;
    }
  };