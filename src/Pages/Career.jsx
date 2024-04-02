import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/Career/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Career() {
    const { light } = useContext(DataContext)
    return (
        <Box sx={{ background: light ? "#121120" : "#FFF", height: "-webkit-fill-available" }}>
            <Navbar />
            <HeroSection />
        </Box>
    )
}
