import React, { useState, useEffect } from 'react';
import TeamWork1 from '../../../assets/images/team-work1.jpg';
import { TbEar } from 'react-icons/tb';
import Dog1 from '../../../assets/images/dog.jpg';
import Dog2 from '../../../assets/images/dog2.jpg';
const ThisIsWhatWeDoBlock = () => {
  const images = [TeamWork1, Dog1, Dog2, TeamWork1, Dog1, Dog2];
  
  // Definición del estado para las imágenes visibles
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));

  // useEffect para manejar la rotación de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prevImages) => {
        const newImages = [...prevImages.slice(2), ...prevImages.slice(0, 2)];
        return newImages;
      });
    }, 5000);
    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="this-is-what-we-do-block">
      <div className="this-is-what-we-do">
        <p className="this-is-what-we-do-description">
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
      <div style={{ margin: '20px' }}>
        <div className="this-is-what-we-do-grid">
          {visibleImages.map((image, index) => (
            <div key={index} className="images-wrapper">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThisIsWhatWeDoBlock;
