import { useContext } from "react"
import { Box, Drawer, IconButton, Typography, useMediaQuery } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import { DataContext } from "../DataProcessing/DataProcessing"
import { Close, Facebook, LinkedIn, Whatsapp } from "../assets/Icons"
import { main } from "../Layout/NavConfig"
export default function MenuDrawer() {
    const { toggleDrawer, open, handleDrawerClose, goToTop, light } = useContext(DataContext)
    const forBelow768 = useMediaQuery("(max-width:768px)");
    // eslint-disable-next-line
    const { pathname } = useLocation();
    // Configure Style Start

    const linkStyle = {
        textDecoration: "none",
        color: "#121120",
        width: "fit-content"
    };
    const DrawerSx = {
        "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            background: light ? "#121120" : "#FFF",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between"
        },
    }
    const TopBarSx = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: forBelow768 ? "16px" : "16px 40px",
    }
    const MenuOptionSx = {
        padding: forBelow768 ? "16px" : "16px 40px",
        mt: forBelow768 ? "40px" : "80px",
        height: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
    }
    const CloseButtonSx = {
        borderRadius: "8px",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const BottomSx = {
        padding: forBelow768 ? "16px" : "16px 40px",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        justifyContent: forBelow768 ? "space-around" : "space-between",
        alignItems: "center",
    }
    const LogoSx = {
        width: forBelow768 ? "140px" : "196px",
    }
    const SocialMediaSx = {
        display: "flex",
        gap: "16px"
    }
    // Configure Style End

    return (
        <Drawer
            variant="temporary"
            anchor="top"
            open={open}
            onClose={toggleDrawer}
            sx={DrawerSx}
        >
            <Box sx={TopBarSx}>
                <Box sx={LogoSx} onClick={goToTop}>
                    {light ? <img src={"/lightLogo.svg"} width="100%" />
                        :
                        <img src={"/Logo.svg"} width="100%" />}
                </Box>
                <IconButton sx={CloseButtonSx} onClick={handleDrawerClose}>
                    <Close />
                </IconButton>
            </Box>
            <Box sx={MenuOptionSx}>
                {main.map((data) => {
                    return (
                        <Link key={data.id} to={data.link} style={linkStyle} onClick={handleDrawerClose}>
                            <Typography variant="h1" color={light ? "text.tertiary" : "text.primary"} sx={{ cursor: "pointer", textDecoration: pathname === data.link && "underline" }}>{data.title}</Typography>
                        </Link>
                    )
                })}
            </Box>
            <Box sx={BottomSx}>
                <Typography variant="h4" color={light ? "text.tertiary" : "text.primary"}>ssjisan.dev@gmail.com</Typography>
                <Typography variant="h4" color={light ? "text.tertiary" : "text.primary"}>+880 1675 89 39 67</Typography>
                <Box sx={SocialMediaSx}>
                    <a href="https://www.linkedin.com/in/ssjisan/" target="_blank">
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href="https://www.facebook.com/userjisan/" target="_blank">
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href="https://wa.me/8801675893967" target="_blank">
                        <IconButton>
                            <Whatsapp />
                        </IconButton>
                    </a>
                </Box>
            </Box>
        </Drawer>
    )
}
