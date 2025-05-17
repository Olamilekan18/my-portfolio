import ProjectCard from "./ProjectCard";
import PortfolioImage from "../assets/7-Portfolio.png";
import EcommerceImage from "../assets/3- E commerce store.png";
import DeliveryImage from "../assets/Delivery Website.png";
import MindSpaceImage from "../assets/4-Mindspace.png";
import BirthdayImage from "../assets/2-Birthday Timer.png";
import TodoImage from "../assets/5-To do list.png";
import CalculatorImage from "../assets/Calculator.png";
import HomifyImage from "../assets/7-Homify.png";
import BooklyImage from "../assets/Bookly.jpg";
import WRBlogImage from "../assets/WRBlog.png";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: PortfolioImage,
    repoLink: "https://github.com/Olamilekan18/my-portfolio",
    liveLink: "https://yourportfolio.com",
    techStack: ["React", "Tailwind"],
  },
  {
    name: "E-commerce App",
    description: "An online store built with React and Firebase.",
    image: EcommerceImage,
    repoLink: "https://github.com/Olamilekan18/Store",
    liveLink: "https://ecommerce-demo.com",
    techStack: ["React", "Node.js", "Firebase"],
  },
  {
    name: "Delivery App",
    description: "A Delivery App built with Next.js and Tailwind CSS",
    image: DeliveryImage,
    repoLink: "https://github.com/Olamilekan18/Delivery-app",
    liveLink: "https://delivery-app-pied.vercel.app/",
    techStack: ["Next.js", "Node.js", "TypeScript", "Tailwind"],
  },
  {
    name: "MindSpace App",
    description: "A Mental Health Application built for students in my community.",
    image: MindSpaceImage,
    repoLink: "https://github.com/Olamilekan18/MindSpace",
    liveLink: "https://mind-space-2.vercel.app/",
    techStack: ["React", "Node.js", "Tailwind"],
  },
    {
    name: "WRBlog",
    description: "A blogging platform that allows users to create and share blogs. Currently in development...",
    image: WRBlogImage,
    repoLink: "currently in progress...",
    liveLink: "",
    techStack: [ "Tailwind", "TypeScript", "Node.js", "React"],
  },
  {
    name: "My Birthday Countdown",
    description: "Made a countdown to my birthday every year 😂",
    image: BirthdayImage,
    repoLink: "https://github.com/Olamilekan18/Birthday-Countdown",
    liveLink: "https://birthday-countdown-silk.vercel.app/",
    techStack: ["HTML", "Tailwind"],
  },
  {
    name: "To-do List",
    description: "Made a quick to-do list while learning JavaScript.",
    image: TodoImage,
    repoLink: "https://github.com/Olamilekan18/To-do-app",
    liveLink: "https://to-do-app-eta-snowy.vercel.app/",
    techStack: ["HTML", "Tailwind"],
  },
  {
    name: "Calculator",
    description: "Made a custom calculator.",
    image: CalculatorImage,
    repoLink: "https://github.com/Olamilekan18/Calculator",
    liveLink: "https://calc-bay-two.vercel.app/",
    techStack: ["HTML", "Tailwind"],
  },
  {
    name: "Homify",
    description: "A rental website that connects agents to those in need of houses. Currently in development...",
    image: HomifyImage,
    repoLink: "currently in progress...",
    liveLink: "",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
  },
  {
    name: "Bookly",
    description: "A P2P website that allows users to share and sell educational resources. Currently in development...",
    image: BooklyImage,
    repoLink: "currently in progress...",
    liveLink: "",
    techStack: ["Next.js", "Tailwind", "TypeScript", "Node.js"],
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
