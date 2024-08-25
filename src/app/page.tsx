import ExpertiseCard from "@/components/ExpertiseCard";
import Marquee from "@/components/magicui/marquee";
import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/ProjectCard";
import expertiseDescription from "@/static/expertiseDescription";
import projectsDescription from "@/static/projectsDescription";

export default function Home() {
  const taglines = [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
  ];

  return (
    <main className="min-h-screen">
      <header className="h-screen flex flex-col">
        <Navbar />

        <div id="hero" className="pt-8 px-28 relative">
          <h1 className="hover:drop-shadow-[5px_10px_10px_#2e6b8c] ease-in-out text-[200px] leading-none font-bold group cursor-pointer transition-all duration-200 hover:translate-x-4">
            Full Stack{" "}
            <p className="transition-all duration-200 group-hover:translate-x-10">
              Developer
            </p>
          </h1>
          <a
            href="#projects"
            className="absolute bottom-8 right-28 dark:bg-[#141414] bg-[#f9f9f9] dark:hover:shadow-gray-400 hover:shadow-md transition-all duration-200 hover:-translate-y-2 flex flex-row items-center rounded-full text-lg font-bold float-right p-8 leading-none"
          >
            SCROLL DOWN{" "}
            <span className="material-symbols-outlined">
              arrow_downward_alt
            </span>
          </a>
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
            <h2 className="text-[48px] font-semibold">Projects</h2>
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

      <section id="about" className="px-28 py-12">
        <h2 className="text-[48px] font-semibold">Expertise</h2>

        <div className="grid grid-cols-2 gap-x-60 gap-y-10 mt-12">
          {expertiseDescription &&
            expertiseDescription.map((expertise, index) => (
              <ExpertiseCard key={index} {...expertise} />
            ))}
        </div>
      </section>

      <section
        id="tagline"
        className="py-4 bg-black text-white dark:bg-[#141414]"
      >
        <Marquee>
          {taglines.map((tagline, index) => (
            <div key={index} className="mr-20 flex flex-row items-center">
              <h1 className="text-[140px] font-semibold">{tagline}</h1>
              <h1 className="text-[140px] ml-24 font-semibold">|</h1>
            </div>
          ))}
        </Marquee>
      </section>

      <section id="testimonials" className="px-28 py-20">
        <h2 className="text-[48px] font-semibold">Testimonials</h2>

        <div className="mt-8 flex flex-row items-center justify-between">
          <p className="text-[40px] max-w-[80%]">{`“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature."`}</p>
          <div className="self-end ">
            <p className="text-[20px] font-semibold">Marcelo Morandi</p>
            <p className="text-[20px]">Project Owner</p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center px-28 pb-12">
        <h1 className="text-[140px] font-bold">{`Let's talk!`}</h1>
        <a
          id="contact"
          href="mailto:satkirat2000@gmail.com"
          className="dark:bg-[#141414] mt-2 gap-2 hover:cursor-pointer bg-[#f9f9f9] dark:hover:shadow-gray-400 hover:shadow-md transition-all duration-200 hover:-translate-y-2 flex flex-row items-center rounded-full text-lg font-bold float-right p-8 leading-none"
        >
          satkirat2000@gmail.com{" "}
          <span className="material-symbols-outlined">arrow_outward</span>
        </a>

        <div className="mt-20 flex w-full flex-row items-center justify-between">
          <p>Satkirat Singh</p>

          <div className="flex flex-row items-center gap-8">
            <a
              href="https://www.linkedin.com/in/satkirat2000/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-2"
            >
              <span className="material-symbols-outlined">link</span> Linkedin
            </a>
            <a
              href="https://github.com/satkiratsingh"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-2"
            >
              <span className="material-symbols-outlined">code</span> Github
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
