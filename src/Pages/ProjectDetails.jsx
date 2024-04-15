import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import Navbar from "../Layout/Navbar";
import { Box } from "@mui/material";
import HeroSection from "../Components/ProjectDetails/HeroSection";
import { useLocation, useParams } from "react-router-dom";
import Projects from "../assets/Projcets.json";
import Error from "./Error";
import ProjectDetail from "../Components/ProjectDetails/ProjectDetail";
import projectsArray from "../assets/Projcets.json";
import { TopArrow } from "../assets/Icons";

export default function ProjectDetails() {
  const { light,goToTop } = useContext(DataContext);
  const { pathname } = useLocation();
  const { title } = useParams();
  const project = Projects.find((project) => project.title === title);
  // If the project is not found, render the NotFound component
  if (!project) {
    return <Error />;
  }
  const titleFromPath = pathname.split("/").pop().replace(/%20/g, " ");
  const selectedProject = projectsArray.find(
    (project) => project.title === titleFromPath
  );
  return (
    <Box
      sx={{
        background: light ? "#121120" : "#FFF",
        height: "-webkit-fill-available",
      }}
    >
      <Navbar />
      <HeroSection selectedProject={selectedProject} />
      <ProjectDetail selectedProject={selectedProject} />
      <Box
        sx={{
          position: "fixed",
          bottom: 48,
          right: 48,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: light
            ? "1px solid rgba(255, 255, 255, 0.24)"
            : "1px solid rgba(17, 24, 39, 0.16)",
          height: "48px",
          width: "48px",
          borderRadius: "8px",
          cursor: "pointer",
          background: light
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(17, 24, 39, 0.08)",
        }}
        onClick={goToTop}
      >
        <TopArrow color={light ? "#fff" : "#121120"} />
      </Box>
    </Box>
  );
}
