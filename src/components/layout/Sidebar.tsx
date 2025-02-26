"use client";

import IconButton from "@mui/material/IconButton";
import MuiDrawer from "@mui/material/Drawer";
import { Theme, CSSObject, styled } from "@mui/material/styles";
import { JSX } from "react";

export const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": openedMixin(theme), // Always fully open
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2, 1, 0),
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ drawer }: { drawer: JSX.Element }) => {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <DrawerHeader>
        <IconButton>
          <img
            src={"/src/assets/icons/overview/logo.svg"}
            alt="logo"
            width={150}
            height={150}
          />
        </IconButton>
      </DrawerHeader>
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
