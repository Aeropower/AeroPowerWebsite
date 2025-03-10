import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Ensure this path is correct

const WindFarmDevDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Dog2}
          alt="Wind Farm Development"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">División de Wind Farm</h2>
        <p className="text-gray-700">
        La División de Desarrollo de Parques Eólicos se centra en la creación de planes para proyectos de parques eólicos marinos. Realizamos análisis de datos, evaluaciones ambientales, evaluaciones económicas y estudios de ingeniería para garantizar la viabilidad y la sostenibilidad de los proyectos de energía eólica. Nuestro trabajo incluye la investigación de los recursos eólicos, la optimización de la ubicación de las turbinas y la garantía del cumplimiento de las normas ambientales.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Miembros del Equipo</h3>
          <ul className="list-disc list-inside">
            <li>Paola N. Gordils - Lider División de Wind Farm</li>
            <li>John Doe - Especialista en medio ambiente</li>
            <li>Jaen Doe - Analista de recursos eólicos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WindFarmDevDiv;