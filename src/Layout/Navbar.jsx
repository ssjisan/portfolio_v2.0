import {
  Box,
  Container,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
// import Logo from "../assets/Logo";
import { Menu, Moon, Sun } from "../assets/Icons";
import MenuDrawer from "./MenuDrawer";
import { motion } from "framer-motion";
import Logo from "../assets/Logo";

export default function Navbar() {
  const { goToTop, handleMode, light, toggleDrawer, open } =
    useContext(DataContext);
  // eslint-disable-next-line
  const { pathname } = useLocation();

  // eslint-disable-next-line
  const forBelow768 = useMediaQuery("(max-width:768px)");
  const forBelow467 = useMediaQuery("(max-width:467px)");

  // Configure Style Start

  const NavSx = {
    p: "16px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    background:
      pathname === "/"
        ? "transparent"
        : light
        ? "rgba(18, 17, 32, 0.48)"
        : "rgba(255, 255, 255, 0.48)",
    backdropFilter: pathname !== "/" && "blur(16px)",
  };
  const LogoSx = {
    width: forBelow768 ? "140px" : "196px",
  };

  const MenuButtonSx = {
    display: "flex",
    height: forBelow467 ? "36px" : "40px",
    width: forBelow467 ? "36px" : "40px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  };
  const StyleSx = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  // Configure Style End

  return (
    <motion.div
      initial={{ y: -100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Box sx={NavSx}>
        <Container sx={StyleSx}>
          <Link to="/">
            <Box sx={LogoSx} onClick={goToTop}>
              <Logo changeColor={light ? "#FFFFFF" : "#111827"} fixedColor="#909090"/>
            </Box>
          </Link>
          <Box sx={{ display: "flex", gap: "8px" }}>
            {light ? (
              <Tooltip title="Go Light">
                <IconButton
                  sx={{
                    ...MenuButtonSx,
                    border: "1px solid rgba(255, 255, 255, 0.32)",
                  }}
                  onClick={handleMode}
                >
                  <Sun />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Go Dark">
                <IconButton
                  sx={{
                    ...MenuButtonSx,
                    border: "1px solid rgba(17, 24, 39, 0.32)",
                  }}
                  onClick={handleMode}
                >
                  <Moon />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Menu">
              <IconButton
                sx={{
                  ...MenuButtonSx,
                  background: light
                    ? "rgba(255, 255, 255, 0.12)"
                    : "rgba(17, 24, 39, 0.08)",
                }}
                onClick={toggleDrawer}
              >
                <Menu />
              </IconButton>
            </Tooltip>
          </Box>
        </Container>
        <MenuDrawer open={open} />
      </Box>
    </motion.div>
  );
}
