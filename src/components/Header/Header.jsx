import * as React from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { makeStyles } from "@mui/styles";
import Register from "../Register/Register";
import Login from "../Login/Login";
const useStyle = makeStyles((theme) => ({
  root: {
    color: "white",
    textDecoration: "none",
  },
}));
export default function Header() {
  const color = "white";
  const classes = useStyle();

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
            {" "}
            <NavLink
              style={() => ({
                color: "white",
              })}
              to="/product"
            >
              <LocalGroceryStoreIcon color="inherit"></LocalGroceryStoreIcon>
            </NavLink>
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
            <Link className={classes.root} to="/">
              {" "}
              MVC Shoes Store
            </Link>
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
