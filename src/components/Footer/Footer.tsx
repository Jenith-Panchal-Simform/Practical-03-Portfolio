import linkedInLogo from "../../assets/linkedIn.png";
import github from "../../assets/github.png";

export const Footer = () => {
  return (
    <footer className="w-full flex-1 border-t-2 border-white text-white p-5 px-20 flex justify-between items-center">
      {/* name/logo */}
      <div className="flex items-baseline">
        <h1 className="text-3xl font-bold">Jenith</h1>
        <h2 className="text-2xl font-bold   ">Panchal</h2>
      </div>

      {/* links */}
      <nav className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/jenith-panchal-432b37237"
          target="_blank"
        >
          <img src={linkedInLogo} alt="LinkedIn Logo" className="h-10 w-10 " />
        </a>
        <a href="https://github.com/Jenith-Panchal-Simform/" target="_blank">
          <img src={github} alt="LinkedIn Logo" className="h-10 w-10 " />
        </a>
      </nav>
    </footer>
  );
};
