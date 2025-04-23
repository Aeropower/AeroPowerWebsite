import React from "react";
import TeamPhoto from "../../../assets/images/team-photo.jpeg";
import LogoAeropower from "../../../assets/images/logo-aeropower.png";
import TypewriterText from "../../../styles/TypewriterText";

const ImpressionBlock = () => {
  return (
    <section className="relative w-full dark:bg-gray-800 text-white transition-colors duration-300">

      <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden shadow-md">
        {/* Background Image */}
        <img
          src={TeamPhoto}
          alt="Team Photo"
          className="object-cover w-full h-full"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

        {/* Centered Logo */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 space-y-4">
          <img
            src={LogoAeropower}
            alt="Aeropower Logo"
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] animate-fadeInSlow filter brightness-125 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpressionBlock;
