import { Box, Typography, useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function DownloadResume() {
    const { light } = useContext(DataContext);
    const forBelow676 = useMediaQuery("(max-width:676px)");

    const ContainerSx = {
        border: light ? "2px solid #343337" : "2px solid #E0E0E0",
        background: light ? "#1C1B2C" : "#F4F4F4",
        borderRadius: "20px",
        p: forBelow676 ? "40px 20px" : "20px 40px",
        height: !forBelow676 && "240px",
        gap: forBelow676 && "40px",
        display: "flex",
        flexDirection: forBelow676 && "column",
        alignItems: "center",
        justifyContent: "space-between"
    }
    return (
        <a href="https://drive.google.com/file/d/1f-blnVJJ5xxTaMFKmUoZtsYqF-Cu9_Br/view?usp=sharing" target="_blank" style={{textDecoration:"none"}}>
            <Box sx={ContainerSx}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: forBelow676 && "center" }}>
                    <Typography variant="h3" color={light ? "text.tertiary" : "text.primary"}>Need to know more?</Typography>
                    <Typography variant="body1" color={light ? "text.tertiary" : "text.primary"}>Additional details available in full resume</Typography>
                </Box>
                <Box sx={{ background: light ? "#FFFFFF" : "#111827", p: "12px 24px", cursor: "pointer", borderRadius: "8px" }}>
                    <Typography variant="h6" sx={{ color: light ? "#111827" : "#FFFFFF" }}>Download Resume</Typography>
                </Box>
            </Box>
        </a>
    )
}
