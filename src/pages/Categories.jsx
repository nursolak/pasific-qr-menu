import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import nonAlcoholImage from "../assets/nonalcohol.jpeg";
import alcoholImage from "../assets/alcohol.jpeg";
import snacksImage from "../assets/snacks.jpeg";

const categories = [
  {
    id: 1,
    name: "Alcoholic Beverages",
    path: "/drinks/alcoholic",
    image: alcoholImage,
  },
  {
    id: 2,
    name: "Non-Alcoholic Beverages",
    path: "/drinks/non-alcoholic",
    image: nonAlcoholImage,
  },
  {
    id: 3,
    name: "Special Delights",
    path: "/drinks/snacks",
    image: snacksImage,
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        px: { xs: 1, sm: 2 },
        py: 3,
        overflowX: "hidden",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <Typography
        color="#1a2147"
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: "1.9rem", // default: <400px
          "@media (min-width:400px)": {
            fontSize: "2rem", // 400px–699px
          },
          "@media (min-width:700px)": {
            fontSize: "2.4rem", // 700px+
          },
        }}
      >
        Our Selection
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Paper
              elevation={4}
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                transition: "0.3s",
                maxWidth: "100%",
                width: "280px",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
              onClick={() => navigate(category.path)}
            >
              <Box
                component="img"
                src={category.image}
                alt={category.name}
                sx={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  display: "block",
                  
                }}
              />
              <Box
                sx={{
                  p: 2,
                  background:
                    "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
                  color: "#fff",
                }}
              >
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    fontWeight: "500",
                    fontSize: "1.2rem",
                  }}
                >
                  {category.name}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
