import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Ensure this path is correct

const SoftwareDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Dog2}
          alt="Software Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">División de Software</h2>
        <p className="text-gray-700">
        La División de Software es responsable del desarrollo y mantenimiento del sitio web y los sistemas integrados del equipo. Nos encargamos del desarrollo web front-end y back-end, garantizando una experiencia de usuario perfecta, y escribimos código integrado para microcontroladores como Arduino para controlar y monitorear sistemas de turbinas. Nuestro trabajo cierra la brecha entre el hardware y el software, lo que permite el procesamiento de datos en tiempo real y la optimización del sistema.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Lo Que Hacemos</h3>
          <ul className="list-disc list-inside">
            <li>Desarrollar y mantener el sitio web del equipo.</li>
            <li>Escribir código integrado para Arduino y otros microcontroladores..</li>
            <li>Diseñar interfaces de usuario para sistemas de monitoreo en tiempo real.</li>
            <li>Collaborate with other divisions to integrate software and hardware.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDiv;