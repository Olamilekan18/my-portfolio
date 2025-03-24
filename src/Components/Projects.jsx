import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/images/portfolio.png",
    repoLink: "https://github.com/yourgithub/portfolio",
    liveLink: "https://yourportfolio.com",
    techStack: ["React", "Tailwind"]
  },
  {
    name: "E-commerce App",
    description: "An online store built with React and Firebase.",
    image: "/images/ecommerce.png",
    repoLink: "https://github.com/yourgithub/ecommerce-app",
    liveLink: "https://ecommerce-demo.com",
    techStack: ["React", "Node.js", "Firebase"]
  },
];

const ProjectSection = () => {
  return (
    <section id="Projects" className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
