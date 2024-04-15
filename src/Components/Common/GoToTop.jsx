import { Box, Tooltip } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import { TopArrow } from "../../assets/Icons";

export default function GoToTop() {
  const { goToTop, light } = useContext(DataContext);

  return (
    <Tooltip title="Go To Top">
      <Box
        sx={{
          position: "fixed",
          bottom: {
            xs: 32,
            sm: 40,
            md: 48,
          },
          right: {
            xs: 16,
            sm: 24,
            md: 48,
          },
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: light
            ? "1px solid rgba(255, 255, 255, 0.24)"
            : "1px solid rgba(17, 24, 39, 0.16)",
          height: "40px",
          width: "40px",
          borderRadius: "8px",
          cursor: "pointer",
          background: light
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(17, 24, 39, 0.08)",
        }}
        onClick={goToTop}
      >
        <TopArrow color={light ? "#fff" : "#121120"} />
      </Box>
    </Tooltip>
  );
}
