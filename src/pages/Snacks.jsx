import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import snacks from "../data/snacks";

const Snacks = () => {
  return (
    <Box sx={{ px: 2, py: 4, backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1a2147", mb: 4 }}
      >
        Aperatifler
      </Typography>

      {snacks.map((item) => (
        <Card
          key={item.id}
          sx={{
            background: "linear-gradient(90deg, rgba(26, 33, 71, 1) 0%, rgba(70, 105, 90, 1) 100%)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            mb: 3,
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: 3,
            px: 1,
            py: 1,
          }}
        >
          {/* Görsel */}
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              width: 90,
              height: 90,
              borderRadius: "18px",
              objectFit: "cover",
              mr: 2,
              ml: 1,
              mt: 1,
              mb: 1,
            }}
          />

          {/* Ad & Açıklama */}
          <CardContent sx={{ flex: 1, p: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              {item.name}
            </Typography>
            <Typography variant="body2" color="#fff">
              {item.content}
            </Typography>
          </CardContent>

          {/* Fiyat */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              pr: 2,
              fontSize: "1rem",
              whiteSpace: "nowrap",
            }}
          >
            {item.price}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default Snacks;
