import { sponsors } from './data/sponsors';

const tierColors = {
  platinum: '#807F7A',
  gold: '#FFD700',
  silver: '#C0C0C0',
  bronze: '#CD7F32',
};

const Sponsors = () => (
  <section className="bg-gray-50 py-24 container mx-auto px-6 mb-10 shadow-md dark:bg-gray-800">
    <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900 dark:text-white tracking-tight">
      Our Valued Partners
    </h2>
    {Object.entries(sponsors).map(([tier, tierSponsors]) => (
      <div key={tier} className="mb-20">
        <h3
          className="text-2xl font-bold mb-10 text-center uppercase tracking-wide"
          style={{ color: tierColors[tier], textShadow: '1px 1px 0 rgba(0,0,0,0.4)' }}
        >
          {tier} Sponsors
        </h3>
        <div
          className={`grid gap-10 ${
            tierSponsors.length === 1
              ? 'grid-cols-1 place-items-center'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {tierSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow dark:bg-gray-700"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-full h-44 object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h4 className="text-lg font-semibold text-center mb-2 dark:text-white">
                {sponsor.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                {sponsor.description}
              </p>
              {sponsor.testimonial && (
                <blockquote className="italic text-gray-700 border-l-4 border-sky-500 pl-4 mt-4 text-sm dark:text-gray-200">
                  &ldquo;{sponsor.testimonial}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Sponsors;
