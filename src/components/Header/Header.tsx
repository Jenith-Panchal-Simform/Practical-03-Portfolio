import linkedInLogo from "../../assets/linkedIn.png";
import github from "../../assets/github.png";

export const Header = () => {
  return (
    <header className="w-full flex-1 text-white p-5 px-20 flex justify-between items-center">
      {/* name/logo */}
      <div className="flex items-baseline">
        <h1 className="text-3xl font-bold">Jenith</h1>
        <h2 className="text-2xl font-bold   ">Panchal</h2>
      </div>

      {/* navidgations */}
      <nav className="flex gap-5 text-xl">
        <a href="" className="hover:font-medium">
          Home
        </a>
        <a href="" className="hover:font-medium">
          About
        </a>
        <a href="" className="hover:font-medium">
          Contact
        </a>
      </nav>

      {/* links */}
      <nav className="flex gap-5">
        <a href="">
          <img src={linkedInLogo} alt="LinkedIn Logo" className="h-10 w-10 " />
        </a>
        <a href="">
          <img src={github} alt="LinkedIn Logo" className="h-10 w-10 " />
        </a>
      </nav>
    </header>
  );
};
