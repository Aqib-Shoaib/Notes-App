import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { format } from "date-fns";

const drawerWidth = 240;
const pageStyles = (theme) => {
  return {
    backgroundColor: "#fefefe",
    width: "100%",
    padding: theme.spacing(3),
  };
};
const drawerStyles = {
  width: drawerWidth,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
};

const root = {
  display: "flex",
};

const active = {
  backgroundColor: "#f4f4f4",
};
const listItemStyles = {
  cursor: "pointer",
};
const titleStyle = (theme) => {
  return {
    padding: theme.spacing(2),
  };
};

const appbarStyles = {
  width: `calc(100% - ${drawerWidth}px)`,
};
const toolbar = (theme) => {
  return theme.mixins.toolbar;
};

const date = {
  flexGrow: 1,
};

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div style={root}>
      <AppBar sx={appbarStyles}>
        <Toolbar>
          <Typography sx={date}>{format(Date.now(), "do MMMM Y")}</Typography>
          <Typography>Aqib Shoaib</Typography>
        </Toolbar>
      </AppBar>

      <Drawer sx={drawerStyles} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={titleStyle}>
            Ninja Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(`${item.path}`)}
              sx={[location.pathname === item.path && active, listItemStyles]}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="div" sx={pageStyles}>
        <Box component="div" sx={toolbar}></Box>
        <Outlet />
      </Box>
    </div>
  );
}

export default AppLayout;
