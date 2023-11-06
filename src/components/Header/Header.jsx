import * as React from "react";
import { NavLink, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { withTheme } from "@emotion/react";
export default function Header() {
  const color = "white";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            MVC Shoes Store
          </Typography>

          <NavLink
            style={() => ({
              color: "white",
            })}
            to="/login"
            className="active-login"
          >
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink
            style={() => ({
              color: "white",
            })}
            to="/register"
            className="active-register"
          >
            <Button color="inherit">Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
