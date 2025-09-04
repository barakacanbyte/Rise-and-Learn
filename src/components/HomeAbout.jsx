import React from "react";
import "../App.css";
import TeamGrid from "../components/TeamGrid";
import { teamMembers } from "../data/team";
// Removed imported Card/AboutCard and created a custom, scalable card below

// --- Custom Milestone Card (scales nicely for 1 or many items) ---
const MilestoneCard = ({ title, year, description, img }) => {
  return (
    <article className="group relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-xl">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800 shadow">
            {year}
          </span>
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 line-clamp-2 text-balance text-xl font-bold tracking-tight text-white drop-shadow">
          {title}
        </h3>
      </div>
      <div className="space-y-3 p-5">
        <p className="text-pretty text-gray-700">{description}</p>
        {/* <div className="flex items-center justify-between pt-1 text-xs text-gray-500">
          <span className="italic">Rise & Learn Foundation</span>
          <span className="opacity-75">Milestone</span>
        </div> */}
      </div>
    </article>
  );
};

const HomeAbout = () => {
  // Keep data as an array so the layout stays scalable if you add more items later
  const milestones = [
    {
      id: 1,
      year: "Flagship Project",
      title: "The Rise and Learn Educational and Empowerment Center",
      description:
        "Our flagship project is a multifunctional hub where children and youth receive quality formal education; vocational and life-skills training (agriculture, entrepreneurship, digital literacy); accessible healthcare and mental health support; child protection and legal advocacy; and sustainability programs such as farming and poultry that both train and generate income. Built to be self-sustaining beyond donor dependency, it models long-term impact and self-reliance.",
      img: "/assets/newrise/flagship-project.jpeg", // swap with a real image when available
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <div
        className="flex justify-center items-start w-full h-[320px] bg-cover bg-no-repeat bg-right md:bg-center p-5"
    
      >
        <div className="flex flex-col w-[90%] md:w-[50%] h-full justify-around text-center text-gray-100">
          <h1 className="text-6xl tracking-tighter font-sans">About Us</h1>
          <p className="text-gray-200">
            The Rise and Learn Foundation is a non-governmental, non-profit
            organization based in Meatu District, Simiyu Region, Tanzania.
            Established with the mission to empower vulnerable children and
            youth, our foundation focuses on transforming lives through a
            holistic approach that integrates education, healthcare, child
            rights advocacy, youth empowerment, and sustainable development.
          </p>
          <p className="text-gray-200">
            At the heart of our work is the belief that every child has the
            right to learn, grow, and succeed, regardless of the circumstances
            they were born into. We recognize that poverty, lack of access to
            education, poor health services, and social exclusion are
            interconnected barriers that limit the potential of children and
            young people in underserved communities.
          </p>
        </div>
      </div>

      {/* Milestones Section */}
      <section className="w-full bg-[var(--orange-dark)] py-12 sm:py-16">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Our Milestones
            </h2>
            {/* <p className="mt-2 text-white/90">
              Designed to look great with one card today—and expand gracefully tomorrow.
            </p> */}
          </div>

          {/* Grid that centers a single card but scales to more */}
          <div
            className={
              milestones.length === 1 ? "grid place-items-center" : "grid"
            }
            style={{
              gridTemplateColumns:
                milestones.length === 1
                  ? "1fr"
                  : "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {milestones.map((m) => (
              <div key={m.id} className="p-2 sm:p-3">
                <MilestoneCard
                  title={m.title}
                  year={m.year}
                  description={m.description}
                  img={m.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Our <span className="text-[var(--orange-dark)]">Team</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who make our mission possible
            </p>
          </div>
          <TeamGrid members={teamMembers} />
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
