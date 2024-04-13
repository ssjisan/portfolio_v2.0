import { Box } from "@mui/material";

export default function ProjectDetailsCard() {
    const images = [
        "/projcets/feni-easy/1.png",
        "/projcets/feni-easy/2.png",
        "/projcets/feni-easy/3.png",
        "/projcets/feni-easy/4.png",
        "/projcets/feni-easy/5.png",
        "/projcets/feni-easy/6.png",
        "/projcets/feni-easy/7.png",
        "/projcets/feni-easy/8.png",
        "/projcets/feni-easy/9.png",
    ]
    return (
        <Box>
            {images.map((data, i) => {
                return (
                    <Box key={i} sx={{ width: "100%" }}>
                        <img src={data} alt="images" width="100%"/>
                    </Box>
                )
            })}
        </Box>
    )
}
