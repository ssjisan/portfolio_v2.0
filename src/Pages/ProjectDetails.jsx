import { useContext } from "react"
import { DataContext } from "../DataProcessing/DataProcessing"
import Navbar from "../Layout/Navbar"
import { Box } from "@mui/material";
import HeroSection from "../Components/ProjectDetails/HeroSection";
import { useParams } from "react-router-dom";
import Projects from "../assets/Projcets.json"
import Error from "./Error";
import ProjectDetail from "../Components/ProjectDetails/ProjectDetail";

export default function ProjectDetails() {
    const { light } = useContext(DataContext)
    const { title } = useParams();
    const project = Projects.find(project => project.title === title);
    // If the project is not found, render the NotFound component
    if (!project) {
        return <Error />;
    }
    return (
        <Box sx={{ background: light ? "#121120" : "#FFF", height: "-webkit-fill-available" }}>
            <Navbar />
            <HeroSection />
            <ProjectDetail />
        </Box>
    )
}
