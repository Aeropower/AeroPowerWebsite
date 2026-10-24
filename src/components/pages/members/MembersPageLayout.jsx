import MemberCard from "./MemberCard";

function MembersPageLayout({ title, members }) {
  return (
    <div className="dark:bg-gray-800 transition-colors duration-300 min-h-[60vh]">
      <section className="w-full py-12 mb-6 bg-gradient-to-r from-[#e8f8f5] to-[#aed6f1] dark:from-gray-700 dark:to-gray-900 shadow-lg">
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          {title} Members
        </h1>
      </section>

      <div className="px-6 pb-10 md:px-10 grid gap-6 grid-cols-1 lg:grid-cols-2">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  );
}

export default MembersPageLayout;
