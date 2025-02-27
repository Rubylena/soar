import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Sidebar, { DrawerHeader, drawerWidth } from "./Sidebar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import { Toolbar, Tooltip } from "@mui/material";
import { useState } from "react";
import { Drawer } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import { navigation } from "../../utils/data";
import Header from "./Header";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      style: {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function SideBarNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMobileDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <div className="flex flex-col md:mt-10  h-full ">
      <List>
        {navigation.map(({ name, link, icon }) => (
          <Tooltip title={name} key={name} placement="right">
            <Link to={link}>
              <ListItem
                disablePadding
                sx={{
                  display: "block",
                  color: pathname === link ? "black" : "#B1B1B1",

                  mb: 2,
                }}
                onClick={() => {
                  handleMobileDrawerClose();
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: "12px", // Added gap between icon and text
                    justifyContent: mobileOpen ? "initial" : "center",
                    borderLeft: pathname === link ? "5px solid #232323" : "",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={icon}
                      alt={name + " icon"}
                      width={24}
                      height={24}
                      className={`${
                        pathname === link && name !== "Dashboard"
                          ? "invert"
                          : ""
                      } ${
                        pathname !== link && name == "Dashboard" ? "invert" : ""
                      }`}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: "500", fontSize: "18px" }}>
                        {name}
                      </Typography>
                    }
                    sx={{
                      opacity: mobileOpen ? 1 : 1,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </Tooltip>
        ))}
      </List>
    </div>
  );

  return (
    <Box>

      <AppBar
        sx={[
          { zIndex: 100 },
          { height: { sm: 95, xs: 120 } },
          { boxShadow: "none" },
          { backgroundColor: "white" },
          {
            display: "flex",

            gap: "12px",
            justifyContent: "center",
          },
          {
            width: { sm: `calc(100% - ${drawerWidth}px)`, xs: "100%" },
          },
        ]}
      >
        <Toolbar>
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      <Sidebar drawer={drawer} />

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleMobileDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerHeader className="justify-center">
          <IconButton>
            <img
              src={"/src/assets/icons/overview/logo.svg"}
              alt="logo"
              width={80}
              height={80}
            />
          </IconButton>
        </DrawerHeader>
        {drawer}
      </Drawer>
    </Box>
  );
}
