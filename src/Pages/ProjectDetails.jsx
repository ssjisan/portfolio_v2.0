import { useContext } from "react"
import { DataContext } from "../DataProcessing/DataProcessing"
import Navbar from "../Layout/Navbar"
import { Box } from "@mui/material";

export default function ProjectDetails() {
    const { light } = useContext(DataContext)

    return (
        <Box sx={{ background: light ? "#121120" : "#FFF", height: "-webkit-fill-available" }}>
            <Navbar />
            this is Your project details
        </Box>
    )
}
