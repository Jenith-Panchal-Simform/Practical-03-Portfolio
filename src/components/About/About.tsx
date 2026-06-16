export const About = () => {
  return (
    <section
      className="text-white flex-5 flex flex-col py-20 px-20 gap-20"
      id="about"
    >
      {/* About */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          about
        </h1>
        <p className="text-xl leading-relaxed">
          Hello, I am Jenith Panchal. I am a dedicated and enthusiastic software
          developer with a passion for learning, problem-solving, and continuous
          growth. I enjoy building web applications, exploring new technologies,
          and collaborating with others to create meaningful solutions. With a
          strong commitment to excellence, I strive to deliver high-quality work
          and continuously improve my technical and professional skills.
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-around gap-6">
        <h2 className="text-2xl md:text-4xl font-bold hover:text-[#A6BBCC] transition">
          React
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold hover:text-[#A6BBCC] transition">
          Node.js
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold hover:text-[#A6BBCC] transition">
          Java
        </h2>
      </div>

      {/* Education */}
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#A6BBCC]">
          education
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
            <p className="text-gray-300 mt-2">Information Technology</p>
            <p className="text-gray-400">VGEC | 2023 - 2026</p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Diploma Engineering</h3>
            <p className="text-gray-300 mt-2">Information Technology </p>
            <p className="text-gray-400">R.C.T.I | 2020-2023</p>
          </div>

          <div className="border border-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Secondary School (10th)</h3>
            <p className="text-gray-300 mt-2">
              Gujarat Secondary Education Board
            </p>
            <p className="text-gray-400">Nirman High School | Completed 2020</p>
          </div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#A6BBCC]">
          hobbies
        </h1>

        <div className="flex flex-wrap gap-4">
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Coding
          </span>
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Learning New Technologies
          </span>
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Hackathons
          </span>
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Gaming
          </span>
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Music
          </span>
          <span className="border border-gray-700 px-6 py-3 rounded-full">
            Reading
          </span>
        </div>
      </div>
    </section>
  );
};
