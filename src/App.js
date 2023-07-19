import "./App.css";
import NavBar from "./components/NavBar";
import Container from "./components/Container/Container";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <AboutMe />
        <Projects />
      </Container>
    </>
  );
}

export default App;
