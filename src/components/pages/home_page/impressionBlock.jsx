import React from "react";
import TeamPhoto from "../../../assets/images/team-photo.webp";
import LogoAeropower from "../../../assets/images/logo-aeropower.png";

const ImpressionBlock = () => {
  return (
    <section className="relative w-full dark:bg-gray-800 text-white transition-colors duration-300">

      <div className="relative w-full h-screen sm:h-screen overflow-hidden shadow-md">
        {/* Team Image */}
        <img
          src={TeamPhoto}
          alt="Team Photo"
          className="object-cover w-full h-full"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

        {/* Center the logo itself */}
        <div className="absolute inset-0 z-20 grid place-items-center text-center px-4
                -translate-y-8 sm:translate-y-0">
          <img
            src={LogoAeropower}
            alt="Aeropower Logo"
            className="w-64 sm:w-80 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] animate-fadeInSlow filter brightness-0 invert drop-shadow-lg"
          />
        </div>

        {/* Buttons placed below; no effect on logo centering */}
       <div  className="absolute inset-x-0 top-1/2 z-20 flex justify-center gap-3 sm:gap-4 px-4
             mt-24 lg:mt-36 xl:mt-44">

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4grUMZI5u7GpCMq8ye5cmEg3D0vC2XQqo3OEMMopO99eIww/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full
                px-6 py-3 text-lg font-semibold
                bg-emerald-600 text-white shadow-lg
                hover:bg-green-700 focus:outline-none
                focus-visible:ring-2 focus-visible:ring-white/90
                focus-visible:ring-offset-2 focus-visible:ring-offset-black/30
                transition [@media(prefers-reduced-motion:reduce)]:transition-none"
            aria-label="Join Aeropower"
          >
            JOIN US!
          </a>
          <a
            href="#thisiswhatwedoblock"
            onClick={(e) => {
              const el = document.getElementById('thisiswhatwedoblock');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border-2 border-darkgreen
                      px-6 py-3 text-lg font-semibold
                      text-white shadow-sm transition
                      hover:bg-darkgreen
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-darkgreen/70
                      focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-800
                      min-h-[44px]
                      "
            aria-label="More info about what we do"
          >
            More Info
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpressionBlock;
