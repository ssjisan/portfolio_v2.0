import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import ProjectDetails from "./Pages/ProjectDetails";


export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects/details" element={<ProjectDetails />} />
    </Routes>
  );
}