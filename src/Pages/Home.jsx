import { Box } from "@mui/material";
import Navbar from "../Layout/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import GoToTop from "../Components/Common/GoToTop";

export default function Home() {
  const { light } = useContext(DataContext);
  return (
    <Box
      sx={{
        background: light ? "#121120" : "#FFF",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Navbar />
      <HeroSection />
      <GoToTop />
    </Box>
  );
}
