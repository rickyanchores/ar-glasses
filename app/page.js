
import Nav from "@/components/Nav/Nav.jsx";
import About from "../pages/About/About.jsx";
import Home from  "../pages/Home/Home.jsx";

export default function App() {
  return (
    <main className="main">
      <Nav />
      <Home />
      <About />
    </main>
  );
}
