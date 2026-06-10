import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="text-white flex-5 flex flex-col py-20 px-20 gap-20">
      {/* project title */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          projects
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          reiciendis aut repellendus corporis ipsa nesciunt vero ipsam at atque
          modi? Saepe accusamus quae, sed quos voluptate nam cumque nihil qui.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* project cards */}

      <div className="flex flex-wrap gap-5">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
