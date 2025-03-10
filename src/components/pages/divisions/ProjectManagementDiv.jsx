import React from 'react';
import Dog2 from "../../../assets/images/dog2.jpg"; // Ensure this path is correct

const ProjectManagementDiv = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center">
      {/* Image Section (Top on small screens, Right on larger screens) */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Dog2}
          alt="Project Management Division"
          className="w-48 h-auto rounded-lg" // Adjust width as needed
        />
      </div>

      {/* Text Section (Bottom on small screens, Left on larger screens) */}
      <div className="w-full md:w-1/2 md:pr-6 mt-6 md:mt-0 order-2 md:order-1">
        <h2 className="text-2xl font-semibold mb-4">División de Project Management</h2>
        <p className="text-gray-700">
          La División de Project Management supervisa la planificación, ejecución y entrega de todos los proyectos del equipo. Nos aseguramos de que los proyectos se completen a tiempo, dentro del presupuesto y cumpliendo con los más altos estándares de calidad. Nuestras responsabilidades incluyen definir los alcances del proyecto, crear cronogramas, asignar recursos y coordinar equipos multifuncionales para lograr los objetivos del proyecto. También nos encargamos de la gestión de riesgos, la comunicación con las partes interesadas y el seguimiento del progreso para garantizar una ejecución fluida del proyecto.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-medium">Lo Que Hacemos</h3>
          <ul className="list-disc list-inside">
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