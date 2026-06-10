import { About } from "../components/About/About";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";
import { Projects } from "../components/Projects/Projects";

function App() {
  return (
    <div className="bg-gray-950">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
