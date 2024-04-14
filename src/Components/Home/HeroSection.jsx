import { Avatar, Box, Container, Typography, useMediaQuery } from '@mui/material'
import { useContext } from 'react';
import { DataContext } from '../../DataProcessing/DataProcessing';
import { motion } from "framer-motion"

export default function HeroSection() {
  const { light } = useContext(DataContext)
  const forBelow768 = useMediaQuery("(max-width:768px)");

  const ContainerSx = {
    height: "100vh",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  }
  const ImageContainerSx = {
    width: forBelow768 ? "200px" : "240px",
    height: forBelow768 ? "200px" : "240px",
    borderRadius: "1000px",
    opacity: "0.8",
    background: "radial-gradient(circle farthest-side at 100% 100%, #9873ff, rgba(152, 115, 255, 0)), radial-gradient(circle farthest-side at 100% 0, #0ba5f7, rgba(85, 196, 255, 0)), radial-gradient(circle farthest-side at 0 0, #ff763c, rgba(255, 176, 60, 0)), radial-gradient(circle farthest-side at 0 100%, #ff5aaa, rgba(255, 90, 170, 0));",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "blur(16px)",
  };
  return (
    <Box sx={{ height: "100vh", position: "relative", width: "100%" }}>
      <img src="/noise.png" alt="noise" style={{ position: "absolute", opacity: "0.32", width: "100%", height: "100%" }} />
      <Container sx={ContainerSx}>
        <Box sx={{
          position: "relative", mt: forBelow768 ? "120px" : "180px",
        }}>
          <Box sx={ImageContainerSx}></Box>
          <Box sx={{
            position: 'absolute', top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: forBelow768 ? "200px" : "230px",
            height: forBelow768 ? "200px" : "230px",
            border: "2px solid rgba(255, 255, 255, 0.32)", display: "flex", background: "rgba(255,255,255, 0.16)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "100%",
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.5
              }}>
              <Avatar src="/pp.png" sx={{ width: forBelow768 ? "180px" : "210px", height: forBelow768 ? "180px" : "210px" }} />
            </motion.div>
          </Box>
        </Box>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.1
          }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: forBelow768 ? "24px" : "16px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <Typography variant='h2' color={light ? "text.tertiary" : "text.primary"}>Hey, I&apos;m Jisan</Typography>
            <Typography variant='h2' color={light ? "text.tertiary" : "text.primary"}>An UI/UX Engineer with over 3 years of experience.</Typography>
            <Typography variant='h6' color="text.secondary" sx={{ width: "100%", maxWidth: "780px" }}>Currently, I&apos;m applying my expertise at Aarong, where I specialize in crafting seamless user experiences with a passion for clean and intuitive design.</Typography>
          </Box>
        </motion.p>
      </Container>
    </Box>
  )
}
