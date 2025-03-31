# 📌 Descripción del Proyecto
Aplicación React para explorar personajes de Rick and Morty que incluye:

- 🔍 **Búsqueda de personajes por nombre**
- ⭐ **Sistema de favoritos persistente**
- 📱 **Diseño responsive con animaciones**
- 📌 **Panel lateral de favoritos interactivo**
- 🔔 **Notificaciones toast para feedback**
- ⚡ **Optimizada para rendimiento con React.memo y Lazy Loading**

---

## 🏗️ Estructura del Proyecto
```
src/
│
├── components/
│   ├── Body.jsx          # Componente principal del cuerpo
│   ├── Buscador.jsx      # Lógica de búsqueda y formulario
│   ├── Cards.jsx         # Tarjetas de personajes y favoritos
│   ├── Footer.jsx        # Pie de página
│   ├── Menu.jsx          # Barra de navegación responsive
│
├── context/
│   └── Funcionalidades.js # Contexto de favoritos (state management)
│
├── services/
│   └── api.js            # Conexión con la API externa
│
│
├── assets/
│   └── logo.webp         # Assets/imágenes
│
├── index.css         # Estilos globales con Tailwind CSS y Bootstrap Icons
│
├── App.jsx               # Componente raíz de la aplicación
└── main.jsx              # Punto de entrada
```

---

## 🛠️ Funcionamiento Técnico

### 🔄 Flujo Principal
#### 🔹 **Inicialización:**
- `App.jsx` carga el contexto de favoritos mediante `FavProvider`
- Renderiza la estructura básica (`Menu + Cuerpo + Footer`)
- Implementa notificaciones con `react-toastify`
- Carga favoritos desde `localStorage`

#### 🔹 **Búsqueda (`Buscador.jsx`):**
```javascript
const Captura = async (e) => {
    e.preventDefault();
    setRespuesta([]);
    setError(null);
    setCarga(true);
    const data = await API(parametros, resultados);
    if (data) {
      setRespuesta(data);
    } else {
      setError("No se encontraron personajes");
    }
    setCarga(false);
  };
```

#### 🔹 **Favoritos (`Funcionalidades.js`):**
```javascript
 const toggleFavorito = (character) => {
    setFavoritos((prev) => {
      const existe = prev.some((personaje) => personaje.id === character.id);
      if (existe) {
        toast.error(`${character.name} eliminado de favoritos!`);
        return prev.filter((personaje) => personaje.id !== character.id);
      } else {
        toast.success(`${character.name} agregado a favoritos!`);
        return [...prev, character];
      }
    });
  };
```

---

## 🧩 Componentes Clave

### 1️⃣ **App.jsx**
- Implementa `FavProvider` para manejar el estado global de favoritos
- Carga `Menu`, `Cuerpo` y `Footer`
- Agrega `ToastContainer` para feedback visual

### 2️⃣ **Cards.jsx**
Muestra grid de personajes con:
- ✅ Panel lateral de favoritos
- 🎞️ Animaciones con Framer Motion
- 🖱️ Detección de clicks fuera del panel
- 📷 Lazy Loading de imágenes

### 3️⃣ **Favoritos.jsx**
- 📜 Lista interactiva con eliminación de personajes
- 🛑 Botón para limpiar todos los favoritos
- 🔄 Sincronización en tiempo real con `localStorage`

### 4️⃣ **Menu.jsx**
Navbar responsive con:
- 🍔 Menú hamburguesa para móviles
- 🎭 Transiciones animadas
- 🏠 Logo clickeable

---

## 🌐 API Service
```javascript
export const API = async (parametros, limite) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(parametros)}`
      );
      const result = await res.json();
      return result.results.slice(0, limite);
    } catch (err) {
      console.error("Error en la API:", err);
      return null;
    }
};
```

---

## 💾 Persistencia de Datos
Los favoritos se guardan en `localStorage` utilizando un hook personalizado:
```javascript
useEffect(() => {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}, [favoritos]);
```

---

## 🎨 Interfaz de Usuario

| Sección       | Características |
|--------------|----------------|
| **Buscador**  | Campo de texto + selector de cantidad + botón con icono |
| **Tarjetas**  | Imagen, nombre, estado, especie + botón favorito animado |
| **Panel Favoritos**  | Despliegue lateral con lista, contador y botones de eliminación |
| **Responsive**  | Menú colapsable, rejilla adaptable, tamaños proporcionales |

---

## 🚀 Cómo Ejecutar
### 1️⃣ **Instalar dependencias:**
```bash
npm install
```
### 2️⃣ **Iniciar servidor de desarrollo:**
```bash
npm run dev
```
### 3️⃣ **Abrir en navegador:**
```
http://localhost:5173
```

---

## 📚 Dependencias

| Paquete          | Uso |
|-----------------|-------------------------------|
| **react**       | Biblioteca base |
| **react-dom**   | Renderizado de componentes |
| **framer-motion** | Animaciones y gestos |
| **react-toastify** | Notificaciones emergentes |
| **bootstrap-icons** | Iconos visuales |
| **tailwindcss**  | Estilizado de la interfaz |

---

## 📝 Notas Adicionales
- 📱 **Optimizado para móviles (touch events)**
- ⚡ **Lazy Loading en imágenes para mejorar rendimiento**
- 🏗 **Accesibilidad básica implementada (roles ARIA)**
- 🎨 **Efectos de hover/click en todos los elementos interactivos**
- 📝 **Código documentado con comentarios explicativos**
- 🔄 **Sincronización con `localStorage` en tiempo real**

---


