import { Box, Typography, useMediaQuery } from "@mui/material";
import { Mail } from "../../assets/Icons";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { MediaLink } from "../../assets/MediaLink"
export default function LinkedMedia() {
    const { light } = useContext(DataContext);
    const forBelow375 = useMediaQuery("(max-width:375px)");
    const forBelow767 = useMediaQuery("(max-width:767px)");
    const forBelow991 = useMediaQuery("(max-width:991px)");

    const MediaListSx = {
        display: forBelow767 ? "none" : "flex",
        flexDirection: "column",
        gap: "16px"
    }
    const MediaLinkSx = {
        display: "flex",
        gap: "16px",
        alignItems: "center"
    }
    const IconBodySx = {
        width: "24px",
        height: "24px",
        display: "flex",
        jusitfyContent: "center",
        alignItems: "center"
    }
    return (
        <Box sx={{ width: "100%", pl: forBelow375 ? "0px" : "40px", display: "flex", flexDirection: "column", gap: "40px", mt: forBelow767 && "40px" }}>
            <Box sx={{ width: (forBelow375 && "100%") || (forBelow991 && "280px") || "380px", height: (forBelow375 && "100%") || (forBelow991 && "280px") || "380px", borderRadius: "16px", transform: " rotate(-357deg)", overflow: "hidden" }}>
                <img src="/pp.png" width="100%" height="100%" />
            </Box>
            <Box sx={MediaListSx}>
                {
                    MediaLink.map((data) => {
                        return (
                            <a href={data.link} target="_blank" key={data.id} style={{ textDecoration: "none" }}>
                                <Box sx={MediaLinkSx}>
                                    <Box sx={IconBodySx}>
                                        {data.icon}
                                    </Box>
                                    <Typography variant="subtitle2" color={light ? "text.tertiary" : "text.primary"}>Follow on {data.title}</Typography>
                                </Box>
                            </a>
                        )
                    })
                }
                <Box sx={{ ...MediaLinkSx, pt: "24px", borderTop: "1px solid rgba(145, 158, 171, 0.48)" }}>
                    <Box sx={IconBodySx}>
                        <Mail />
                    </Box>
                    <Typography color={light ? "text.tertiary" : "text.primary"} variant="subtitle2">ssjisan.dev@gmail.com</Typography>
                </Box>
            </Box>
        </Box>
    )
}
