import React from 'react';
import { Buscador } from './Buscador';

export const Cuerpo = () => {
  return (
    <main className="min-w-full bg-red-500">
      <Buscador />

      <section id="Uso" className="py-12 pt-25 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-green-400">
            ¿Cómo usar la página?
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              🔍 Buscar personajes
            </h3>
            <p className="text-gray-300 mb-4">
              Para buscar personajes, puedes utilizar el campo de búsqueda en la parte superior de la página. Simplemente escribe el nombre del personaje que deseas encontrar y presiona "Enter". La página filtrará automáticamente los personajes que coincidan con tu búsqueda.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-sm text-gray-300">
                Ejemplo: Escribe "Rick" para encontrar todos los personajes relacionados con Rick.
              </code>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              ❤️ Gestión de favoritos
            </h3>
            <p className="text-gray-300 mb-4">
              Puedes agregar personajes a tus favoritos haciendo clic en el ícono de corazón (<i className="bi bi-heart"></i>) en la esquina superior derecha de cada tarjeta de personaje. Los personajes favoritos se guardarán en tu lista y podrás acceder a ellos en cualquier momento.
            </p>
            <p className="text-gray-300 mb-4">
              Para ver tus favoritos, haz clic en el botón con el ícono de corazón (<i className="bi bi-heart-fill"></i>) en la esquina superior derecha de la página. Se abrirá un panel lateral donde podrás ver, eliminar o expandir tus personajes favoritos.
            </p>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-sm text-gray-300">
                Haz clic en la "X" en la esquina superior derecha de una tarjeta de favoritos para expandirla y ver más detalles.
              </code>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              🃏 Tarjetas de personajes
            </h3>
            <p className="text-gray-300 mb-4">
              Cada tarjeta de personaje muestra información detallada, incluyendo:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Nombre del personaje.</li>
              <li>Estado (Vivo, Muerto o Desconocido).</li>
              <li>Especie.</li>
              <li>Última ubicación conocida.</li>
              <li>Lugar de origen.</li>
            </ul>
            <p className="text-gray-300 mb-4">
              Puedes hacer clic en el ícono de corazón para agregar o quitar el personaje de tus favoritos.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              📂 Panel de favoritos
            </h3>
            <p className="text-gray-300 mb-4">
              El panel de favoritos te permite ver todos los personajes que has marcado como favoritos. Desde aquí, puedes:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Eliminar personajes de tu lista de favoritos.</li>
              <li>Expandir una tarjeta para ver más detalles.</li>
              <li>Cerrar el panel haciendo clic en la "X" en la esquina superior derecha.</li>
            </ul>
            <div className="bg-gray-800 p-4 rounded-lg">
              <code className="text-sm text-gray-300">
                Nota: El panel de favoritos se cierra automáticamente si haces clic fuera de él.
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              🎨 Interactividad
            </h3>
            <p className="text-gray-300 mb-4">
              La página está diseñada para ser interactiva y responsive. Algunas características incluyen:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Efectos de hover en las tarjetas y botones.</li>
              <li>Transiciones suaves al agregar o eliminar favoritos.</li>
              <li>Diseño adaptable a dispositivos móviles y tablets.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};