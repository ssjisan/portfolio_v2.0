import { Box, Container, Typography } from "@mui/material";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { useContext } from "react";
import PropTypes from 'prop-types';

export default function HeroSection({ selectedProject }) {
  const { light } = useContext(DataContext);
  const { title, tags } = selectedProject;
  const ChipContainerSx = { display: "flex", gap: "16px", flexWrap: "wrap" };
  const ChipSx = {
    borderRadius: "1000px",
    p: "4px 16px",
    height: "32px",
    // border: light ? "1.5px solid #fff" : "1.5px solid #111827",
    boxShadow: light ? "0px 0px 0px 1px #fff" : "0px 0px 0px 1px #000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "box-shadow 0.45s ease-in-out",
    "&:hover": {
      boxShadow: light ? "0px 0px 0px 2px #fff" : "0px 0px 0px 2px #000000",
    },
  };
  return (
    <Container>
      <Box
        sx={{
          pt: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            maxWidth: "640px",
          }}
        >
          <Typography
            variant="h3"
            color={light ? "text.tertiary" : "text.primary"}
          >
            {title}
          </Typography>
          <Box sx={ChipContainerSx}>
            {tags.map((data, i) => {
              return (
                <Box sx={ChipSx} key={i}>
                  <Typography
                    variant="subtitle2"
                    color={light ? "text.tertiary" : "text.primary"}
                  >
                    {data}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

HeroSection.propTypes = {
    selectedProject: PropTypes.shape({
        imgSet: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
    }),
};
