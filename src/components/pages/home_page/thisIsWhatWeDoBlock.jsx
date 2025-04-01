import React, { useState, useEffect } from 'react';
import TeamWork1 from '../../../assets/images/team-work1.jpg';
import Dog1 from '../../../assets/images/dog.jpg';
import Dog2 from '../../../assets/images/dog2.jpg';

const ThisIsWhatWeDoBlock = () => {
  const images = [TeamWork1, Dog1, Dog2, TeamWork1, Dog1, Dog2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white dark:bg-gray-800 mt-6 shadow-md transition-colors">
      <div className="w-full md:w-1/2 order-2 md:order-1 md:pr-8">
        <h2 className="text-2xl font-bold mb-4 text-center">This is what we do!</h2>
        <p className="text-center md:text-left text-lg">
          ¡Involúcrate en el primer y único equipo del Colegio que diseñará, manufactura y probará una turbina eólica (de viento)!
          Aeropower es un proyecto de la IEEE Power & Energy Society (PES) con el fin de proveer oportunidades a
          colegiales para que se desarrollen dentro del campo de la energía renovable. Estamos buscando
          estudiantes talentosos de TODOS los departamentos para formar parte del equipo. Tenemos como meta
          competir y representar a Puerto Rico en la Collegiate Wind Competition (CWC), competencia auspiciada por
          el Depto. de Energía de E.E.U.U.
          Aeropower competirá contra otras 31 universidades de todo Norteamérica por la duración de todo el año
          académico. La final de la CWC tendrá como sede en la ciudad de Minneapolis, Minnesota en mayo del 2024.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="animate-imageFade w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ThisIsWhatWeDoBlock;
