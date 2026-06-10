export const Home = () => {
  return (
    <main
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
          src="https://th.bing.com/th/id/OIP.zsu9Q2fgwEFCjJ0jYcOSIAHaE8?w=251&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
          alt="Profile Photo"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </main>
  );
};
