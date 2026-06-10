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
        <p className="text-xl">
          Hello I am Jenith Panchal,I am a dedicated and enthusiastic
          professional with a passion for learning, problem-solving, and
          continuous growth. I enjoy taking on new challenges, collaborating
          with others, and delivering high-quality results. With a positive
          attitude and strong commitment to excellence, I strive to make
          meaningful contributions in both my personal and professional
          endeavors.
        </p>
      </div>
      <div className="flex justify-around">
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold hover:text-[#A6BBCC]">
          React
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold hover:text-[#A6BBCC]">
          Node
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold hover:text-[#A6BBCC]">
          Java
        </h2>
      </div>
    </section>
  );
};
