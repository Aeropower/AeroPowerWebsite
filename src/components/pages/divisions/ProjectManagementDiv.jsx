import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Replace later with a video

const ProjectManagementDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center w-full dark:bg-gray-800">
      {/* Image Section (Left on larger screens, Top on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
        <img
          src={Dog2}
          alt="Project Management Division"
          className="w-48 h-auto rounded-lg"
        />
      </div>

      {/* Text Section (Right on large screens, Bottom on small screens) */}
      <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0 order-2 md:order-2">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center md:text-left dark:text-white">
          División de Project Management
        </h2>

        <p className="text-gray-700 dark:text-white leading-relaxed">
          La División de Project Management supervisa la planificación, ejecución y entrega de todos los proyectos del equipo. Nos aseguramos de que los proyectos se completen a tiempo, dentro del presupuesto y cumpliendo con los más altos estándares de calidad. Nuestras responsabilidades incluyen definir los alcances del proyecto, crear cronogramas, asignar recursos y coordinar equipos multifuncionales para lograr los objetivos del proyecto. También nos encargamos de la gestión de riesgos, la comunicación con las partes interesadas y el seguimiento del progreso para garantizar una ejecución fluida del proyecto.
        </p>

        {/* List of Responsibilities */}
        <div className="mt-4">
          <h3 className="text-xl font-medium">Lo Que Hacemos</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-white">
            <li>Definir los alcances, los cronogramas y los resultados del proyecto.</li>
            <li>Asignar recursos y gestionar presupuestos de forma eficaz.</li>
            <li>Coordinar equipos multifuncionales para una colaboración fluida.</li>
            <li>Supervisar el progreso del proyecto y mitigar los riesgos.</li>
            <li>Comunicarse con las partes interesadas para garantizar la alineación y la transparencia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementDiv;
