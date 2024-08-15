import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, People, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <Drawer variant="permanent" sx={{ width: 240, flexshrink: 0 }}>
        <Toolbar />
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <ListItemButton components={Link} to="/users">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Users"></ListItemText>
          </ListItemButton>

          <ListItemButton components={Link} to="/products">
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Products"></ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </aside>
  );
};
