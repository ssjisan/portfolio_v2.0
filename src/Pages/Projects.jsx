import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/Projects/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ProjectList from "../Components/Projects/ProjectList";

export default function Projects() {
    const { light } = useContext(DataContext)

    return (
        <Box sx={{ background: light ? "#121120" : "#FFF", height: "100vh", overflowY: "auto" }}>
            <Navbar />
            <HeroSection />
            <ProjectList />
        </Box>
    )
}
