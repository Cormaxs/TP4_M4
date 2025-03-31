# 📌 Descripción del Proyecto
Aplicación React para explorar personajes de Rick and Morty que incluye:

- 🔍 **Búsqueda de personajes por nombre**
- ⭐ **Sistema de favoritos persistente**
- 📱 **Diseño responsive con animaciones**
- 📌 **Panel lateral de favoritos interactivo**
- 🔔 **Notificaciones toast para feedback**

---

## 🏗️ Estructura del Proyecto
```
src/
│
├── components/
│   ├── Body.jsx          # Componente principal del cuerpo
│   ├── buscador.jsx      # Lógica de búsqueda y formulario
│   ├── cards.jsx         # Tarjetas de personajes y favoritos
│   ├── footer.jsx        # Pie de página
│   ├── menu.jsx          # Barra de navegación responsive
│
├── context/
│   └── Funcionalidades.js # Contexto de favoritos (state management)
│
├── services/
│   └── api.js            # Conexión con la API externa
│
├── assets/
│   └── logo.webp         # Assets/imágenes
│
├── styles/
│   └── index.css         # Estilos globales con Tailwind CSS y Bootstrap Icons
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

#### 🔹 **Búsqueda (`buscador.jsx`):**
```javascript
const Captura = async (e) => {
  e.preventDefault();
  const data = await API(parametros, resultados);
  setRespuesta(data || []);
};
```

#### 🔹 **Favoritos (`Funcionalidades.js`):**
```javascript
const toggleFavorito = (character) => {
  setFavoritos(prev => {
    const existe = prev.some(p => p.id === character.id);
    return existe 
      ? prev.filter(p => p.id !== character.id)
      : [...prev, character];
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

### 3️⃣ **Menu.jsx**
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
Los favoritos se guardan en `localStorage`:
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
- 🏗 **Accesibilidad básica implementada (roles ARIA)**
- 🎨 **Efectos de hover/click en todos los elementos interactivos**
- 📝 **Código documentado con comentarios explicativos**
