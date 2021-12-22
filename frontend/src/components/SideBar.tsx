import React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import {
  IconButton,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SellIcon from "@mui/icons-material/Sell";
import { BrowserRouter, Link } from "react-router-dom";

interface ISideBarProps {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
}

const menuItems = [
  {
    name: "Ventas",
    dir: "Sales",
    icon: <MonetizationOnIcon />,
  },
  {
    name: "Cuentas",
    dir: "accounts",
    icon: <SwitchAccountIcon />,
  },
  {
    name: "Presupuestos",
    dir: "budgets",
    icon: <SellIcon />,
  },
  {
    name: "Productos",
    dir: "products",
    icon: <CategoryIcon />,
  },
];

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar(props: ISideBarProps) {
  const { open, handleDrawerClose, handleDrawerOpen } = props;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton>
          {!open ? (
            <ChevronRightIcon onClick={handleDrawerOpen} />
          ) : (
            <ChevronLeftIcon onClick={handleDrawerClose} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {menuItems.map((item) => (
        <List>
          <ListItemButton key={item.name}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItemButton>
        </List>
      ))}
      <Divider />
    </Drawer>
  );
}
