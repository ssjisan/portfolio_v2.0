import { Box, Grid, Typography } from "@mui/material";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useContext } from "react";
import Projects from "../../assets/Projcets.json"
export default function ProjectsCard() {
    const { light } = useContext(DataContext)
    const CardSx = { display: "flex", flexDirection: "column", gap: "40px" }
    const ImageSx = {
        width: "100%",
        borderRadius: "48px",
        overflow: "hidden",
        transition: "transform .5s ease-in-out",
        "&:hover img": {
            transform: "scale(1.25)", // Scale the image on hover
        },
    }
    const ContentBoxSx = { display: "flex", flexDirection: "column", gap: "16px" }
    const ChipSx = { borderRadius: "1000px", p: "4px 16px", height: "32px", border: "1.5px solid #919EAB", display: "flex", justifyContent: "center", alignItems: "center" }
    const ChipContainerSx = { display: "flex", gap: "16px" }
    return (
        <Box>
            <Grid container spacing={4} >
                {Projects.map((data) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} key={data.id}>
                            <Box sx={CardSx} >
                                <Box sx={{ ...ImageSx, height: data.id % 2 === 0 ? "450px" : "580px", mt: data.id % 2 === 0 && "64px", }}>
                                    <img src={data.imgUrl} width="100%" style={{ transition: "transform .5s ease-in-out", }} />
                                </Box>
                                <Box sx={ContentBoxSx}>
                                    <Typography variant="h4" color={light ? "text.tertiary" : "text.primary"}>{data.title}</Typography>
                                    <Box sx={ChipContainerSx}>
                                        {
                                            data.tags.map((data, i) => {
                                                return (
                                                    <Box sx={ChipSx} key={i}>
                                                        <Typography variant="body2" color="text.secondary">{data}</Typography>
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
                }
            </Grid>
        </Box>
    )
}
