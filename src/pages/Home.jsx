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
        overflow: "hidden", // Scrollu engeller
        width: "100%", // Sağ kaymayı engellemek için width'i %100 yapıyoruz
        margin: 0, // Margin'in dışarı taşmaması için sıfırlama
        boxSizing: "border-box", // Padding'in genişliği etkilememesi için
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: { xs: "40%", sm: "160px" }, // Logo boyutları mobilde küçük
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
            fontSize: { xs: "2rem", sm: "2.5rem" },
            background:
              "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Pasific Tekne Turuna
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem" },
            background:
              "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Hoş Geldiniz
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
          fontSize: { xs: "1rem", sm: "1.2rem" }, // Buton boyutları mobilde küçülür
          borderRadius: "999px",
          textTransform: "none",
        }}
      >
        Menüyü Görüntüle
      </Button>
    </Box>
  );
};

export default Home;
