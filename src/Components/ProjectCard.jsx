import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiTypescript } from "react-icons/si";

const ProjectCard = ({ name, description, image, repoLink, liveLink, techStack }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 transform transition-all duration-300 hover:scale-105 z-10">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        {/* Tech Stack Icons */}
        <div className="flex gap-2 mt-2">
          {techStack.includes("React") && <FaReact className="text-blue-500 text-xl" />}
          {techStack.includes("Next.js") && <SiNextdotjs className="text-black text-xl" />}
          {techStack.includes("Node.js") && <FaNodeJs className="text-green-500 text-xl" />}
          {techStack.includes("Tailwind") && <SiTailwindcss className="text-cyan-500 text-xl" />}
          {techStack.includes("Firebase") && <SiFirebase className="text-yellow-500 text-xl" />}
          {techStack.includes("HTML") && <FaHtml5 className="text-orange-500 text-xl" />}
          {techStack.includes("TypeScript") && <SiTypescript className="text-blue-600 text-xl" />}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            <FaGithub /> View Code
          </a>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaExternalLinkAlt /> View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
