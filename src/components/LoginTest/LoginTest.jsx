import * as React from "react";
import { Link, NavLink, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
export default function LoginTest() {
  const classes = useStyle();

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRe, setOpenRe] = React.useState(false);
  const handleClickOpenRe = () => {
    setOpenRe(true);
  };
  const handleCloseRe = () => {
    setOpenRe(false);
  };
  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

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
            <Button onClick={handleClickOpenLogin} color="inherit">
              Login
            </Button>
          </NavLink>
          <NavLink
            style={() => ({
              color: "white",
            })}
            to="/register"
            className="active-register"
          >
            <Button onClick={handleClickOpenRe} color="inherit">
              Register
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Dialog
        onClose={(event, reason, handleClose) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            // Set 'open' to false, however you would do that with your particular code.
            setOpenLogin(false);
          }
        }}
        disableEscapeKeyDown="true"
        open={openLogin}
      >
        <DialogContent>
          <Login />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogin}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        onClose={(event, reason, handleClose) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            // Set 'open' to false, however you would do that with your particular code.
            setOpenRe(false);
          }
        }}
        disableEscapeKeyDown="true"
        open={openRe}
      >
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRe}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
