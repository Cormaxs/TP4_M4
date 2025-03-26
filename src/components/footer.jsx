import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/logo.webp";

export const Footer = () => {
  const linkVariants = {
    hover: { scale: 1.05, color: '#10B981' },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center md:items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-12 w-12 mb-4" />
          <span className="font-semibold text-gray-700 text-lg">Rick And Morty</span>
          <p className="text-gray-500 text-sm mt-2">
            Proyecto de practica para el modulo 4 del Nodo tecnologico catamarca, Consumo de API usando fetch o axios
          </p>
        </motion.div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rick And Morty Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};