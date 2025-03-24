import React from "react";

export default function About() {
  return (
    <section
      id="About"
      className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-20 md:py-32 px-6"
    >
      <div className="w-full max-w-screen-lg bg-white p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          I am a passionate <strong>web and app developer</strong> with expertise in
          <strong> React, React Native, Express, and Firebase</strong>, specializing in
          <strong> frontend and backend development</strong> to create seamless,
          user-friendly applications. My projects span
          <strong> e-commerce platforms, rental applications, and content-driven websites</strong>,
          where I integrate features such as <strong>authentication, real-time updates,
          scheduled content publishing, and personalized user experiences</strong>.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mt-6">
          Tech Stack:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-sm sm:text-base md:text-lg">
          <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Headless UI</li>
          <li><strong>Backend:</strong> Node.js, Express, Firebase</li>
          <li><strong>Database:</strong> Firestore, MongoDB</li>
          <li><strong>CMS & Monetization:</strong> WordPress, Google AdSense, SEO Optimization</li>
          <li><strong>Other Tools:</strong> Git, REST APIs, Typescript,  WebSockets</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-6 text-sm sm:text-base md:text-lg">
          Beyond development, I am deeply invested in <strong>user engagement and monetization
          strategies</strong>, leveraging tools like <strong>newsletters, automated content
          scheduling, and SEO best practices</strong> to drive traffic and retention.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4 text-sm sm:text-base md:text-lg">
          Additionally, I have a passion for storytelling, crafting intricate plots in the
          <strong> billionaire mafia fiction</strong> genre. My writing emphasizes
          <strong> complex character development, high-stakes conflicts, and immersive world-building</strong>—
          a skill that also enhances my ability to create compelling digital experiences.
        </p>
      </div>
    </section>
  );
}
