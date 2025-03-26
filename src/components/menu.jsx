import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.webp";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hover: { scale: 1.05, color: '#10B981' },
    tap: { scale: 0.95 },
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center cursor-pointer">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-gray-700 text-lg">Rick And Morty</span>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            <motion.a href="#" variants={linkVariants} whileHover="hover" whileTap="tap" className="text-gray-600 hover:text-green-500 font-semibold transition-colors">
              Inicio
            </motion.a>
            <motion.a href="#Uso" variants={linkVariants} whileHover="hover" whileTap="tap" className="text-gray-600 hover:text-green-500 font-semibold transition-colors">
              Uso
            </motion.a>
          </div>

          <motion.button onClick={toggleMenu} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial="closed" animate="open" exit="closed" variants={mobileMenuVariants} className="md:hidden mt-2 space-y-2">
              <motion.a href="#" whileHover={{ scale: 1.05, color: '#10B981' }} whileTap={{ scale: 0.95 }} className="block py-2 px-4 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                Inicio
              </motion.a>
              <motion.a href="#Uso" whileHover={{ scale: 1.05, color: '#10B981' }} whileTap={{ scale: 0.95 }} className="block py-2 px-4 text-gray-700 hover:bg-green-50 rounded-lg transition-colors">
                Uso
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};