import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const BusinessOpsDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full">
      {/* Text Section (Left on large screens, Bottom on small screens) */}
      <div className="w-full md:w-1/2 md:pr-6 order-2 md:order-1">
        {/* Division Title */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          División de Business & Operations
        </h2>

        {/* Description */}
        <p className="text-gray-700">
          La División de Business & Operations gestiona los asuntos cotidianos, las operaciones del equipo y la planificación de actividades. Las responsabilidades incluyen la coordinación de eventos de divulgación, el mantenimiento de una sólida presencia en las redes sociales, la documentación del recorrido del equipo y la realización de actividades de recaudación de fondos. La división también establece relaciones profesionales con expertos y organizaciones de la industria para respaldar el éxito del proyecto.
        </p>

        {/* List of Responsibilities */}
        <div className="mt-4">
          <h3 className="text-xl font-medium">Lo Que Hacemos</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Gestionar cronogramas, presupuestos y recursos del proyecto.</li>
            <li>Desarrollar estrategias de marketing y campañas de difusión.</li>
            <li>Realizar análisis financieros y asegurar oportunidades de financiación.</li>
            <li>Colaborar con equipos multifuncionales para el éxito del proyecto.</li>
          </ul>
        </div>
      </div>

      {/* Image Section (Right on large screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-6 md:mt-0">
        <img
          src={Dog2}
          alt="Business and Operations Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default BusinessOpsDiv;
