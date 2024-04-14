import { Box } from "@mui/material";
import { motion } from "framer-motion"

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
                    <motion.div
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.5
                            }
                        }}
                        viewport={{ once: true }}>
                        <Box sx={{ width: "100%" }}>
                            <img src={data} alt="images" width="100%" />
                        </Box>
                    </motion.div>
                )
            })}
        </Box>
    )
}
