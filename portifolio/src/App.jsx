import "./App.css";
import Banner from "./components/Banner/Banner.jsx";
import Header from "./components/Header/Header.jsx";
import IconsBar from "./components/IconsBar/IconsBar.jsx";

function App() {
  return (
    <>
      <Header />
      <section>
        <Banner text="Guilherme"></Banner>
        <IconsBar start="0" finish="8" imgSize="3vw"></IconsBar>
      </section>
    </>
  );
}

export default App;
