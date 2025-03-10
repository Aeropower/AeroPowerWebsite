import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Ensure this path is correct

const MechanicalDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center">
      {/* Image Section (Top on small screens, Right on larger screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Dog2}
          alt="Mechanical Division"
          className="w-48 h-auto rounded-lg" // Adjust width as needed
        />
      </div>

      {/* Text Section (Bottom on small screens, Left on larger screens) */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1">
        <h2 className="text-2xl font-semibold mb-4">División Mecanica</h2>
        <p className="text-gray-700">
          La División Mecánica se encarga de todos los aspectos físicos de la turbina. Los miembros investigan, diseñan y analizan los componentes mecánicos, crean modelos CAD finales y supervisan los esfuerzos de fabricación. Se aplican principios aerodinámicos para optimizar el diseño de las palas y garantizar un rendimiento óptimo. Las tareas clave incluyen la colaboración con otras divisiones, la realización de análisis CFD y el montaje y prueba de componentes.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Lo Que Hacemos</h3>
          <ul className="list-disc list-inside">
            <li>Colaborar con otras divisiones para el diseño y los parámetros operativos.</li>
            <li>Diseñar CAD finales y fabricar componentes de turbinas.</li>
            <li>Realizar análisis CFD de componentes diseñados.</li>
            <li>Ensamblar y probar componentes fabricados.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MechanicalDiv;