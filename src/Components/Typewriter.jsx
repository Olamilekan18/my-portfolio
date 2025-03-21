import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="text-center text-2xl font-bold">
      <Typewriter
        options={{
          strings: ["Hi, I am Olamilekan", "A web and app developer"],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
