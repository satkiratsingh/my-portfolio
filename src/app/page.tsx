import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/Projects/ProjectCard";
import projectsDescription from "@/static/projectsDescription";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="h-screen flex flex-col">
        <Navbar />

        <div id="hero" className="pt-8 px-28 relative">
          <h1 className="text-[200px] leading-none font-bold">
            Full Stack Developer
          </h1>
          <button className="absolute bottom-8 right-28 dark:bg-[#141414] bg-[#f9f9f9] dark:hover:shadow-gray-400 hover:shadow-md transition-all duration-200 hover:-translate-y-2 flex flex-row items-center rounded-full text-lg font-bold float-right p-8 leading-none">
            SCROLL DOWN{" "}
            <span className="material-symbols-outlined">
              arrow_downward_alt
            </span>
          </button>
        </div>

        <div className="flex flex-1 flex-row items-center justify-between px-28">
          <div>
            <h4 className="text-[32px] mb-2">{"Let's talk"}</h4>
            <a className="hover:underline" href="mailto:satkirat2000@gmail.com">
              satkirat2000@gmail.com
            </a>
          </div>
          <p className="w-[500px]">
            {`Hello, I'm Satkirat Singh, a Full Stack Developer specializing in
            website and mobile app development, delivering comprehensive
            solutions from front-end to back-end.`}
          </p>
        </div>
      </header>

      <section id="projects" className="px-28 py-12">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-[48px]">Projects</h2>
            <p className="w-[300px]">{`As an experienced developer of modern, user-focused websites and mobile apps, I strive to help you build the digital solution of your dreams.`}</p>
          </div>

          <a
            href="/"
            className="items-center self-end text-[20px] group flex flex-row hover:cursor-pointer"
          >
            <span className="group-hover:underline">More</span>
            <span className="material-symbols-outlined transition-all duration-200 opacity-60 group-hover:opacity-100">
              arrow_right_alt
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 py-4">
          {projectsDescription &&
            projectsDescription.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                thumbnail={project.thumbnail}
                description={project.description}
                bgGradientFrom={project.bgGradientFrom}
                bgGradientTo={project.bgGradientTo}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
