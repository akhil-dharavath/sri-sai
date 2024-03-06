import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  ["", "Home"],
  ["principles", "Principles"],
  ["support", "Support"],
  ["projects", "Projects"],
  ["our-equipments", "Our Equipments"],
  ["about", "About Us"],
];

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sri Sai Engineering & Technical Services
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={`/${item[0]}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                textAlign: "center",
                width: "100%",
              }}
            >
              <ListItemText primary={item[1]} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const location = useLocation().pathname.slice(1);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {isSmallScreen && (
            <Box
              sx={{
                display: { sm: "none" } ? "flex" : "none",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Link to="/">
                <img
                  src={require("../assets/company_images/logo.jpeg")}
                  alt="logo"
                  height={70}
                />
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">
              <img
                src={require("../assets/company_images/logo.jpeg")}
                alt="logo"
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                disableRipple
                key={item}
                component={Link}
                to={`/${item[0]}`}
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  ":hover": { background: "none" },
                }}
                className={`${location === item[0] ? "active" : ""}`}
              >
                {item[1]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
