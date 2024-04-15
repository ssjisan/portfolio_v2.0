import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/About/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ResumeBody from "../Components/Resume/ResumeBody";
import { TopArrow } from "../assets/Icons";

export default function Resume() {
  const { light, goToTop } = useContext(DataContext);

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
      <Box
        sx={{
          position: "fixed",
          bottom: 48,
          right: 48,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border:light ? "1px solid rgba(255, 255, 255, 0.24)" : "1px solid rgba(17, 24, 39, 0.16)",
          height:"48px",
          width:"48px",
          borderRadius:"8px",
          cursor:"pointer",
          background: light ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 24, 39, 0.08)"
        }}
        onClick={goToTop}
      >
        <TopArrow color={light ? "#fff" : "#121120"} />
      </Box>
    </Box>
  );
}
