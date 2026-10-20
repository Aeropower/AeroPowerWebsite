import { FaLinkedin, FaUser } from "react-icons/fa";

function MemberCard({ position, name, major, year, linkedin, photo }) {
  return (
    <article className="flex items-center gap-5 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        {photo ? (
          <img
            src={photo}
            alt={`${name}, ${position}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <FaUser className="text-4xl text-gray-400" aria-hidden="true" />
        )}
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wide text-[--primary-green] dark:text-emerald-400">
          {position}
        </p>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-gray-700 dark:text-gray-200">{major}</p>
        <p className="text-gray-700 dark:text-gray-200">{year}</p>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline"
          >
            <FaLinkedin aria-hidden="true" /> LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}

export default MemberCard;
