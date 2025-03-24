import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/src/assets/7-Portfolio.png",
    repoLink: "https://github.com/Olamilekan18/my-portfolio",
    liveLink: "https://yourportfolio.com",
    techStack: ["React", "Tailwind"]
  },
  {
    name: "E-commerce App",
    description: "An online store built with React and Firebase.",
    image: "/src/assets/3- E commerce store.png",
    repoLink: "https://github.com/Olamilekan18/Store",
    liveLink: "https://ecommerce-demo.com",
    techStack: ["React", "Node.js", "Firebase"]
  },
  {
    name: "Delivery App",
    description: "An Delivery App built with Next.js and Tailwind Css",
    image: "/src/assets/Delivery Website.png",
    repoLink: "https://github.com/Olamilekan18/Delivery-app",
    liveLink: "https://delivery-app-pied.vercel.app/",
    techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind"]
  },
  {
    name: "MindSpace App",
    description: "A Mental Health Application built for students in my Community",
    image: "/src/assets/4-Mindspace.png",
    repoLink: "https://github.com/Olamilekan18/MindSpace",
    liveLink: "https://mind-space-2.vercel.app/",
    techStack: ["React", "Node.js", "Tailwind"]
  },
  {
    name: "My Birthday Countdown",
    description: "Made a countdown to my birthday every year 😂",
    image: "/src/assets/2-Birthday Timer.png",
    repoLink: "https://github.com/Olamilekan18/Birthday-Countdown",
    liveLink: "https://birthday-countdown-silk.vercel.app/",
    techStack: ["HTML", "Tailwind"]
  },
  {
    name: "To-do list",
    description: "Made a quick to-do list while learning javasript",
    image: "/src/assets/5-To do list.png",
    repoLink: "https://github.com/Olamilekan18/To-do-app",
    liveLink: "https://to-do-app-eta-snowy.vercel.app/",
    techStack: ["HTML", "Tailwind"]
  },
  {
    name: "Calculator",
    description: "Made a custom calculator",
    image: "/src/assets/Calculator.png",
    repoLink: "https://github.com/Olamilekan18/Calculator",
    liveLink: "https://calc-bay-two.vercel.app/",
    techStack: ["HTML", "Tailwind"]
  },
  {
    name: "Homify",
    description: "A rental website that connects Agents to those in need of house. Currently in development...",
    image: "/src/assets/7-Homify.png",
    repoLink: "currently in progress...",
    liveLink: "",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js"]
  },

  {
    name: "Bookly",
    description: "A P2P website that allows users to share and sell educationational resources. Currently in development...",
    image: "/src/assets/Bookly.jpg",
    repoLink: "currently in progress...",
    liveLink: "",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js"]
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
