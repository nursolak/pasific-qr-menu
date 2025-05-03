import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
        textAlign: "center",
        px: 2,
        overflow: "hidden", 
        width: "100%", 
        margin: 0, 
        boxSizing: "border-box", 
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: { xs: "40%", sm: "160px" }, 
          mb: 5,
        }}
      />
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={1}
        mb={4}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.25rem", sm: "2.5rem" },
            background:
              "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Welcome to
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2.3rem", sm: "2.5rem" },
            background:
              "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Pasific Boat Tour
        </Typography>
      </Box>

      <Button
        variant="contained"
        onClick={() => navigate("/categories")}
        sx={{
          background:
            "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
          px: 4,
          py: 1.5,
          width: '280px',
          fontSize: { xs: "1rem", sm: "1.2rem" }, 
          borderRadius: "999px",
          textTransform: "none",
        }}
      >
        View to Menu
      </Button>
    </Box>
  );
};

export default Home;
