
import Navbar from "./navbar";
import HomePage from "./home";
import About from "./about";
import Services from "./services";
import Team from "./team";
import Project from "./project";

export default function Home() {
  return (
   <main>
      <Navbar/>
      <HomePage/>
      <About/>
      <Services/>
      <Team/>
      <Project/>
   </main>
  )
}
