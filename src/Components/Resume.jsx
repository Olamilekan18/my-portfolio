import Typewriter from 'typewriter-effect';
import passportImage from '../assets/passport.jpg';

export default function Resume() {
  return (
    <div>
      <div className="absolute top-25  z-40 m-1 text-center w-max h-16 ml-20">
        <div className="intro h-screen justify-between flex xl:gap-x-100">
          <div className="text-center justify-center  text-2xl font-bold">
            <h1 className="mb-10">Hi, I am Olamilekan</h1>
            <Typewriter
              options={{
                strings: [
                  "A web and App developer",
                  "A frontend developer",
                  "A Computer Science with Mathematics Student",
                  "A goal getter",
                ],
                autoStart: true,
                loop: true,
                delay: 15,
                deleteSpeed: 10,
              }}
            />
          </div>
    
  <div className="flex justify-end flex-1 ">
    <img src={passportImage} alt="Passport" className="w-80  h-80 rounded-full object-cover" />
  </div>
 
        </div>
        <div  className='absolute top-60 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-bold'>
          Hi, I am Olamilekan, a full-stack web devloper and currently honing my app development skills. <br />
          Below is my resume, I'll love to connect with you. 
        </div>
        <a
  href="https://drive.google.com/file/d/124KYKzmxvFVPUgV8GrjAE4leFraIJEzZ/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-blue-700 absolute text-white top-90 left-1/3  rounded-lg transition duration-300 ease-in-out hover:bg-transparent"
>
  Download Resume
</a>
      </div>
    </div>
  );
}