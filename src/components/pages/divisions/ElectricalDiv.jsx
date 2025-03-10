import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Ensure this path is correct

const ElectricalDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center">
      {/* Image Section (Top on small screens, Right on larger screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Dog2}
          alt="Electrical Division"
          className="w-48 h-auto rounded-lg" // Adjust width as needed
        />
      </div>

      {/* Text Section (Bottom on small screens, Left on larger screens) */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1">
        <h2 className="text-2xl font-semibold mb-4">División Eléctrica</h2>
        <p className="text-gray-700">
          La División Eléctrica es responsable de todos los aspectos eléctricos de la turbina. Los miembros investigan, diseñan y prueban componentes eléctricos como circuitos, microcontroladores y sensores utilizando herramientas como programación, diseño de circuitos y modelado CAD. Al combinar la creatividad y la experiencia en ingeniería, el equipo desarrolla soluciones innovadoras para mejorar la eficiencia, la confiabilidad y el rendimiento de los sistemas de turbinas eólicas. Las tareas clave incluyen la colaboración con otras divisiones para definir parámetros de diseño, garantizar el cableado y las conexiones adecuadas y configurar sistemas de monitoreo remoto para realizar un seguimiento del rendimiento, diagnosticar problemas y controlar las operaciones de la turbina.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Miembros del Equipo</h3>
          <ul className="list-disc list-inside">
            <li>Josue Colon - Lider División Eléctrica</li>
            <li>Jae Doe - Analista de Sistemas</li>
            <li>Joe Doe - Especialista en Mantenimiento</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ElectricalDiv;