import { Box, Container, Typography } from "@mui/material";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useContext } from "react";

export default function HeroSection() {
    const { light } = useContext(DataContext)

    return (
        <Container>
            <Box sx={{ pt: "120px", display: "flex", flexDirection: "column", gap: "40px" }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "640px" }}>
                    <Typography variant="h3" color={light ? "text.tertiary" : "text.primary"}>Designing paths for digital change and innovation in every pixel.</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Exploring My Professional Journey Through Impactful Roles, Projects, and Contributions That Shaped My Career.</Typography>
                </Box>
            </Box>
        </Container>
    )
}
