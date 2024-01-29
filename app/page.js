
import Nav from "@/components/Nav/Nav.jsx";
import About from "../pages/About/About.jsx";
import Home from  "../pages/Home/Home.jsx";
import Banner from "@/pages/Banner/Banner.jsx";
import Shop from "@/pages/Shop/Shop.jsx";
import Contact from "@/pages/Contact/Contact.jsx";

export default function App() {
  return (
    <main className="main">
      <Nav />
      <Home />
      <About />
      <Banner />
      <Shop />
      <Contact />
    </main>
  );
}
