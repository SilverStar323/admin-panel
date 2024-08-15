import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography varient="h6">Admin Panel</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};
