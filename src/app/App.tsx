import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
