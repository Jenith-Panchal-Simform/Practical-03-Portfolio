import profile from "../../../public/images/profile.jpeg";

export const Home = () => {
  return (
    <section
      className="flex text-white py-20 px-10 justify-around items-center"
      id="home"
    >
      {/* left */}
      <div className="flex flex-col w-1/3">
        <h3 className="tracking-wider">Hello I'm Jenith,</h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          Full stack Developer
        </h1>
      </div>
      {/* right */}
      <div className=" border border-[#A6BBCC] rounded-xl  aspect-square w-1/3">
        {/* image */}
        <img
          src={profile}
          alt="Profile Photo"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};
