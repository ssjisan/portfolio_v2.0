import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/Projects/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ProjectList from "../Components/Projects/ProjectList";
import MoreProject from "../Components/Projects/MoreProject";

export default function Projects() {
    const { light } = useContext(DataContext)

    return (
        <Box sx={{ background: light ? "#121120" : "#FFF", height: "-webkit-fill-available" }}>
            <Navbar />
            <HeroSection />
            <ProjectList />
            <MoreProject/>
        </Box>
    )
}
