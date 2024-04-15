import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/About/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ResumeBody from "../Components/Resume/ResumeBody";
import GoToTop from "../Components/Common/GoToTop";

export default function Resume() {
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
      <ResumeBody />
      <GoToTop />
    </Box>
  );
}
