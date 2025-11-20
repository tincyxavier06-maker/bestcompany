import { AppBar, Link, Stack, styled, Toolbar, Typography, Box } from "@mui/material";
import React from "react";
import FoodCard from "./FoodCard";

const NewToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#aff0ecff",
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

        {}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src="food.jpg"   
            alt="Logo"
            sx={{ width: 45, height: 45, borderRadius: "50%" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            FOOD STREET
          </Typography>
        </Stack>

        {}
        <Stack direction="row" spacing={4}>
          <NavLink href="home">HOME</NavLink>
          <NavLink href="food">FOOD</NavLink>
          <NavLink href="veg">VEG</NavLink>
          <NavLink href="non veg">NON VEG</NavLink>
        </Stack>

      </NewToolBar>
    </AppBar>
    
  );
};

export default Header;