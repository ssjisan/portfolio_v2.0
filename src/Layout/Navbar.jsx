import { Box, Container, IconButton, useMediaQuery } from "@mui/material"
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
// import Logo from "../assets/Logo";
import { Menu, Moon, Sun } from "../assets/Icons";
import MenuDrawer from "./MenuDrawer";
export default function Navbar() {
    const { goToTop, handleMode, light, toggleDrawer, open } = useContext(DataContext);
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
        background: pathname === "/" ? "transparent" : (light ? "rgba(18, 17, 32, 0.48)" : "rgba(255, 255, 255, 0.48)"),
        backdropFilter: pathname !== "/" && "blur(16px)",
    }
    const LogoSx = {
        width: forBelow768 ? "140px" : "196px",
    }

    const MenuButtonSx = {
        display: "flex",
        height: forBelow467 ? "36px" : "40px",
        width: forBelow467 ? "36px" : "40px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
    }

    // Configure Style End

    return (
        <Box sx={NavSx}>
            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/">
                    <Box sx={LogoSx} onClick={goToTop}>
                        {light ? <img src={"/lightLogo.svg"} width="100%" />
                            :
                            <img src={"/Logo.svg"} width="100%" />}
                    </Box>
                </Link>
                <Box sx={{ display: "flex", gap: "8px" }}>
                    {light ? <IconButton sx={{ ...MenuButtonSx, border: "1px solid rgba(255, 255, 255, 0.32)", }} onClick={handleMode}>
                        <Sun />
                    </IconButton>
                        :
                        <IconButton sx={{ ...MenuButtonSx, border: "1px solid rgba(17, 24, 39, 0.32)", }} onClick={handleMode}>
                            <Moon />
                        </IconButton>}
                    <IconButton sx={{ ...MenuButtonSx, background: light ? "rgba(255, 255, 255, 0.12)" : "rgba(17, 24, 39, 0.08)", }} onClick={toggleDrawer}>
                        <Menu />
                    </IconButton>
                </Box>
            </Container>
            <MenuDrawer open={open} />
        </Box>
    )
}
