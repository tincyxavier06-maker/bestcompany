import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#350202ff",
        color: "#fff",
        padding: "3rem 2rem",
        marginTop: "3rem",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={4}
      >
        {}
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
           FOOD STREET
          </Typography>

          <Typography variant="body1">
            1234 Example Street,<br />
            Near City Center,<br />
            Hyderabad, Telangana, India - 500001
          </Typography>

          <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
            Email: rincyxavier05@gmail.com
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Phone: +91 9943434275
          </Typography>
        </Box>

        {}
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            height: "250px",
            borderRadius: "10px",
            overflow: "hidden",
            border: "2px solid #333",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.381715795373!2d78.48667187491243!3d17.436522983437352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a3b2dd8ad79%3A0x6768d1dfb7d46b0d!2sHyderabad%20City!5e0!3m2!1sen!2sin!4v1704800000000"
          ></iframe>
        </Box>
      </Stack>

      {}
      <Typography
        variant="body2"
        sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}
      >
        © {new Date().getFullYear()} FOOD STREET READY TO SERVE YOU
      </Typography>
    </Box>
  );
};

export default Footer;