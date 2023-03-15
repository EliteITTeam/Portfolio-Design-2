import logo from "./logo.svg";
import "./App.css";
import { Home } from "./modules";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
