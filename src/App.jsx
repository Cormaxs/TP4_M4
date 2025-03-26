import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FavProvider } from "./context/Funcionalidades";
import { Menu } from "./components/menu";
import { Footer } from "./components/footer";
import { Cuerpo } from "./components/Body";

function App() {
  return (
    <FavProvider>
      <Menu />
      <Cuerpo />
      <Footer />
      <ToastContainer />
    </FavProvider>
  );
}

export default App;