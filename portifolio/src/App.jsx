import "./App.css";
import About from "./components/About/About.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import IconsBar from "./components/IconsBar/IconsBar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <section id="banner">
          <Banner text="Guilherme"></Banner>
          <IconsBar start="0" finish="8" imgSize="3vw"></IconsBar>
        </section>
        <About id="about"></About>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
