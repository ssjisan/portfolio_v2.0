import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/About/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import AboutBody from "../Components/About/AboutBody";
import GoToTop from "../Components/Common/GoToTop";

export default function About() {
  const { light } = useContext(DataContext);

  return (
    <Box
      sx={{
        background: light ? "#121120" : "#FFF",
        height: "-webkit-fill-available",
      }}
    >
      <Navbar />
      <HeroSection />
      <AboutBody />
      <GoToTop/>
    </Box>
  );
}
