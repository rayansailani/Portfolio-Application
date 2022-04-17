import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LaptopIcon from "@mui/icons-material/Laptop";
import MuiSwitch from "../Switch";

const NavBar = ({ toggleDarkMode }) => {
  return (
    <Box style={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "#24292F !important", minWidth: "100vw !important" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LaptopIcon style={{ color: "white" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Rayan Sailani
          </Typography>
          <MuiSwitch toggleDarkMode={toggleDarkMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
