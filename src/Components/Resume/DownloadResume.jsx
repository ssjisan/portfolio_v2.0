import { Box, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function DownloadResume() {
    const { light } = useContext(DataContext);
    const forBelow676 = useMediaQuery("(max-width:676px)");

    const ContainerSx = {
        border: light ? "2px solid #343337" : "2px solid #E0E0E0",
        background: "#111",
        borderRadius: "20px",
        p: forBelow676 ? "80px 20px" : "120px 40px",
        gap: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage: "radial-gradient(circle at -30% 21%, #3842FF 0, transparent 30%), radial-gradient(circle at 120% 80%, #3842FF 0, transparent 30%)"
    }
    const ButtonSx = {
        position: "relative",
        background: "#FFFFFF",
        cursor: "pointer",
        borderRadius: "8px",
        display: "inline-block",
        overflow: "hidden",
        textAlign: "center",
        transition: "0.3s",
        height: forBelow676 ? "48px" :"60px",
        lineHeight: forBelow676 ? "48px" :"60px",
        border: "3px solid tranparent",
        "&:hover": {
            boxShadow: " 0 0 12px 0 #FFF inset, 0 0 20px 0px #FFF",
            border: "3px solid tranparent"
        },
        "&:hover .label-up": {
            top: "-100%",

        }
    }
    const LabelUp = {
        display: "block",
        margin: forBelow676 ? "0px 32px ":"0px 48px",
        height: "100%",
        position: "relative",
        fontSize: "16px",
        fontWeight: 500,
        top: "0%",
        transition: "0.3s", className: "label-up"
    }
    return (
        <a href="https://drive.google.com/file/d/1f-blnVJJ5xxTaMFKmUoZtsYqF-Cu9_Br/view?usp=sharing" target="_blank" style={{ textDecoration: "none" }}>
            <Box sx={ContainerSx}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "center" }}>
                    <Typography variant="h6" color="text.tertiary">Need to know more?</Typography>
                    <Typography variant="h2" color="text.tertiary">Additional details available in full resume</Typography>
                </Box>
                <Box sx={ButtonSx}>
                    <Box sx={LabelUp} className="label-up">Download Resume</Box>
                    <Box sx={LabelUp} className="label-up">Download Resume</Box>
                </Box>
            </Box>
        </a>
    )
}