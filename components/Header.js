import { AppBar, Link, Stack, styled, Toolbar, Typography, Box } from "@mui/material";
import React from "react";

const NewToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0d0d0d",
  padding: "0 2rem",
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#fff",
  fontSize: "1rem",
  fontWeight: 500,
  transition: "0.3s",
  "&:hover": {
    color: "#ffcc00",
    transform: "translateY(-2px)"
  }
}));

const Header = () => {
  return (
    <AppBar position="static" elevation={4}>
      <NewToolBar>

        {/* LOGO SECTION */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src="/logo.png"    // <-- replace with your logo path
            alt="Logo"
            sx={{ width: 45, height: 45, borderRadius: "50%" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            IACT
          </Typography>
        </Stack>

        {/* NAVIGATION LINKS */}
        <Stack direction="row" spacing={4}>
          <NavLink href="home">Home</NavLink>
          <NavLink href="about">About</NavLink>
          <NavLink href="courses">Courses</NavLink>
          <NavLink href="contact">Contact</NavLink>
        </Stack>

      </NewToolBar>
    </AppBar>
  );
};

export default Header;