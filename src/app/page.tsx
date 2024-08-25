import ExpertiseCard from "@/components/ExpertiseCard";
import Marquee from "@/components/magicui/marquee";
import Navbar from "@/components/Navbar/Navbar";
import ProjectCard from "@/components/ProjectCard";
import expertiseDescription from "@/static/expertiseDescription";
import projectsDescription from "@/static/projectsDescription";

export default function Home() {
  const taglines = [
    "Innovative Development for Web and Mobile Solutions",
    "Building Seamless Digital Experiences",
    "Crafting Custom Code for Powerful Applications",
  ];

  return (
    <main className="min-h-screen">
      <header className="md:h-screen flex flex-col">
        <Navbar />

        <div id="hero" className="pt-8 max-md:px-10 px-28 max-sm:px-4 relative">
          <h1 className="hover:drop-shadow-[5px_10px_10px_#2e6b8c] ease-in-out text-[200px] max-sm:text-[48px] max-sm:text-center max-md:text-[84px] leading-none font-bold group cursor-pointer transition-all duration-200 hover:translate-x-4">
            Full Stack{" "}
            <p className="transition-all duration-200 max-md:group-hover:translate-x-5 group-hover:translate-x-10">
              Developer
            </p>
          </h1>
          <a
            href="#projects"
            className="max-sm:relative max-sm:p-2 max-sm:mt-4 max-sm:right-0 absolute max-md:bottom-0 max-md:right-10 bottom-8 right-28 dark:bg-[#141414] bg-[#f9f9f9] hover:shadow-[#2e6b8c] hover:shadow-md transition-all duration-200 hover:-translate-y-2 flex flex-row items-center rounded-full text-[18px] font-bold float-right p-8 leading-none"
          >
            SCROLL DOWN{" "}
            <span className="material-symbols-outlined">
              arrow_downward_alt
            </span>
          </a>
        </div>

        <div className="flex max-md:mt-10 flex-1 flex-row items-center justify-between max-sm:px-4 max-md:px-10 px-28">
          <div className="max-sm:self-start">
            <h4 className="text-[32px] max-sm:text-[20px] mb-2">
              {"Let's talk"}
            </h4>
            <a
              className="hover:underline max-sm:text-[10px]"
              href="mailto:satkirat2000@gmail.com"
            >
              satkirat2000@gmail.com
            </a>
          </div>
          <p className="w-[500px] max-sm:text-[14px] max-sm:max-w-[200px] max-md:w-[350px]">
            {`Hello, I'm Satkirat Singh, a Full Stack Developer specializing in
            website and mobile app development, delivering comprehensive
            solutions from front-end to back-end.`}
          </p>
        </div>
      </header>

      <section id="projects" className="px-28 max-sm:px-4 max-md:px-10 py-12">
        <div className="flex flex-col relative">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-[48px] max-sm:text-[24px] font-semibold">
              Projects
            </h2>

            <a
              href="#projects"
              className="items-center sm:absolute sm:bottom-0 sm:right-0 max-sm:text-[12px] text-[20px] group flex flex-row hover:cursor-pointer"
            >
              <span className="group-hover:underline">More</span>
              <span className="material-symbols-outlined transition-all duration-200 md:opacity-60 group-hover:opacity-100">
                arrow_right_alt
              </span>
            </a>
          </div>

          <p className="w-[300px] max-sm:my-4">{`As an experienced developer of modern, user-focused websites and mobile apps, I strive to help you build the digital solution of your dreams.`}</p>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8 gap-10 pt-4">
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

      <section id="about" className="px-28 max-sm:p-4 max-md:px-10 py-12">
        <h2 className="text-[48px] max-sm:text-[24px] font-semibold">
          Expertise
        </h2>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-6 max-md:gap-x-10 gap-x-60 gap-y-14 max-sm:mt-6 mt-12">
          {expertiseDescription &&
            expertiseDescription.map((expertise, index) => (
              <ExpertiseCard key={index} {...expertise} />
            ))}
        </div>
      </section>

      <section
        id="tagline"
        className="py-4 max-sm:mt-8 max-md:py-2 bg-black text-white dark:bg-[#141414]"
      >
        <Marquee>
          {taglines.map((tagline, index) => (
            <div
              key={index}
              className="mr-20 max-md:mr-16 max-sm:mr-4 flex flex-row items-center"
            >
              <h1 className="text-[140px] max-md:text-[84px] max-sm:text-[48px] font-semibold">
                {tagline}
              </h1>
              <h1 className="text-[140px] max-md:text-[84px] max-sm:text-[48px] max-sm:ml-8 max-md:ml-20 ml-24 font-semibold">
                |
              </h1>
            </div>
          ))}
        </Marquee>
      </section>

      <section
        id="testimonials"
        className="px-28 max-md:px-10 max-sm:px-4 max-sm:py-10 py-20"
      >
        <h2 className="text-[48px] max-sm:text-[24px] font-semibold">
          Testimonials
        </h2>

        <div className="mt-8 max-sm:mt-4 flex flex-row max-sm:flex-col sm:items-center justify-between">
          <p className="text-[40px] max-md:text-[16px] max-sm:max-w-full max-md:max-w-[70%] max-w-[80%]">{`“Satkirat is an outstanding developer. He understands complex requirements and turns them into high-quality web and mobile applications. Since I started working with him, I've seen him deliver everything from sleek, responsive websites to fully functional mobile apps. His work also includes seamless integration of front-end and back-end technologies, providing end-to-end digital solutions."`}</p>
          <div className="self-end max-sm:self-start">
            <p className="text-[20px] max-sm:text-[16px] font-semibold max-sm:mt-4">
              Marcelo Morandi
            </p>
            <p className="text-[16px] max-sm:text-[14px] max-sm:mt-2">
              Project Owner
            </p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center px-28 max-md:px-10 max-sm:px-4 max-sm:pb-6 pb-12">
        <h1 className="text-[140px] max-md:text-[84px] max-sm:text-[48px] font-bold">{`Let's talk!`}</h1>
        <a
          id="contact"
          href="mailto:satkirat2000@gmail.com"
          className="dark:bg-[#141414] max-sm:mt-8 mt-2 gap-2 hover:cursor-pointer bg-[#f9f9f9] hover:shadow-[#2e6b8c] hover:shadow-md transition-all duration-200 hover:-translate-y-2 flex flex-row items-center rounded-full text-lg font-bold float-right p-8 max-md:p-6 leading-none"
        >
          satkirat2000@gmail.com{" "}
          <span className="material-symbols-outlined">arrow_outward</span>
        </a>

        <div className="mt-20 max-sm:mt-6 text-[18px] max-sm:flex-col max-md:text-[12px] flex w-full flex-row items-center justify-between">
          <p className="max-sm:text-[14px]">Satkirat Singh</p>

          <div className="flex flex-row items-center max-sm:mt-4 gap-8">
            <a
              href="https://www.linkedin.com/in/satkirat2000/"
              target="_blank"
              rel="noreferrer"
              className="flex dark:font-thin hover:font-bold flex-row items-center gap-2 group transition-all duration-200 hover:scale-110"
            >
              <span className="material-symbols-outlined transition-all duration-200 group-hover:rotate-[0deg] rotate-[20deg]">
                link
              </span>{" "}
              Linkedin
            </a>
            <a
              href="https://github.com/satkiratsingh"
              target="_blank"
              rel="noreferrer"
              className="flex dark:font-thin hover:font-bold flex-row items-center gap-2 group transition-all duration-200 hover:scale-110"
            >
              <span className="material-symbols-outlined transition-all duration-200 group-hover:rotate-[0deg] rotate-[20deg]">
                code
              </span>{" "}
              Github
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
