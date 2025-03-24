import Typewriter from "typewriter-effect";
import passportImage from "../assets/passport.jpg";

export default function Resume() {
  return (
    <section id="Resume" className="w-full h-screen flex flex-col items-center justify-center bg-white">
      {/* Container */}
      <div className="w-screen mr-10 max-w-none flex flex-col md:flex-row items-center text-center md:text-left px-6">
        
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">Hi, I am Olamilekan</h1>
          <Typewriter
            options={{
              strings: [
                "A Web and App Developer",
                "A Frontend Developer",
                "A Computer Science with Mathematics Student",
                "A Goal Getter",
              ],
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 10,
            }}
          />
          <p className="text-lg">
            I'm a full-stack web developer currently honing my app development skills.
          </p>
          <a
            href="https://drive.google.com/file/d/124KYKzmxvFVPUgV8GrjAE4leFraIJEzZ/view?usp=sharing"
            download="My_Resume.pdf"
            className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 border border-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end flex-1">
          <img src={passportImage} alt="Passport" className="w-80 h-80 rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
}
