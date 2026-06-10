import { About } from "../components/About/About";
import { Header } from "../components/Header/Header";
import { Home } from "../components/Home/Home";

function App() {
  return (
    <div className="bg-gray-950">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
