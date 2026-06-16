import { ProjectCard } from "./ProjectCard";
import duckhunt from "/images/projects/duckhunt.png";
import codetogether from "/images/projects/codetogether.jpeg";
import sudoku from "/images/projects/sudoku.jpeg";
import tictactoe from "/images/projects/tictactoe.jpeg";
import repoboot from "/public/images/projects/repo-boot.png";

export const Projects = () => {
  return (
    <section
      className="text-white flex-5 flex flex-col py-20 px-20 gap-20"
      id="projects"
    >
      {/* project title */}
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A6BBCC]">
          projects
        </h1>
        <p className="text-xl">
          Here are some of the projects I have developed to apply and strengthen
          my skills in full-stack development, problem-solving, and software
          engineering. These projects reflect my hands-on experience with modern
          technologies and my ability to build practical, user-focused
          solutions.
        </p>
      </div>
      {/* project cards */}

      <ul className="flex flex-wrap gap-5">
        <ProjectCard
          imageURL={duckhunt}
          desc="Developed a classic Duck Hunt-style game featuring smooth gameplay, responsive controls, and real-time target tracking. Implemented GPU acceleration using transform operations to optimize rendering performance and deliver a seamless gaming experience."
        />
        <ProjectCard
          imageURL={codetogether}
          desc="Built Code Together, a real-time collaborative code editor where multiple users can work on the same file simultaneously with live presence tracking and shared cursor visibility. Features include multi-file/tab support, IndexedDB-based file persistence, file-wise undo/redo, and advanced search with next-match navigation (Ctrl + F)."
        />
        <ProjectCard
          imageURL={sudoku}
          desc="Developed a Sudoku game using HTML, CSS, and JavaScript featuring an interactive puzzle grid with solution validation and user-friendly gameplay. Currently implementing dynamic puzzle generation logic to automatically create unique Sudoku challenges instead of relying on a single predefined puzzle."
        />
        <ProjectCard
          imageURL={tictactoe}
          desc="Developed a Tic-Tac-Toe game using HTML, CSS, and JavaScript featuring two-player turn-based gameplay with real-time board updates. Implemented winner detection with highlighted winning combinations, strike-through animations, and end-of-game result announcements for an engaging user experience."
        />
        <ProjectCard
          imageURL={repoboot}
          desc="Developed and published Repo Boot, an npm package built with TypeScript to automate repository setup and eliminate repetitive project initialization tasks. The tool instantly generates a README.md file and a GitHub Pull Request template, helping developers bootstrap new projects with a single command."
        />
      </ul>
    </section>
  );
};
