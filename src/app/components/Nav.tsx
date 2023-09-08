import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flex: 1, marginLeft: "35px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            DEMO Streaming
          </Link>
        </Typography>
        <Button color="inherit">Login</Button>

        <Button
          variant="contained"
          style={{ marginRight: "55px", backgroundColor: "#414141" }}
        >
          Start Your Free Trial
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
