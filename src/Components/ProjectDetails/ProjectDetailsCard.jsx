import { Box } from "@mui/material";
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

export default function ProjectDetailsCard({selectedProject}) {

    const { imgSet } = selectedProject;

    return (
        <Box sx={{pb:"48px"}}>
            {imgSet?.map((data, i) => {
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

ProjectDetailsCard.propTypes = {
    selectedProject: PropTypes.shape({
        imgSet: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};
