import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//import AdbIcon from '@mui/icons-material/Adb';
import Steinslogo from "../Images/Steins Logo.png";
import SteinsGif1 from "../Images/s1.gif";
import SteinsGif2 from "../Images/s2.gif";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const pages = [
  { text: "Home", link: "/Home" },
  { text: "Chatrooms", link: "/Chatrooms" },
  { text: "Merch", link: "" },
  { text: "Amadeus", link: "" },
];
const settings = [
  { text: "Profiles", link: "" },
  { text: "Account", link: "" },
  { text: "Dashboard", link: "" },
  { text: "Logout", link: "/Login" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    if(link) navigate(link);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "95%",
        margin: "0 auto 5px auto",
        "background-color": "black",
        border:"1px solid orange",
        "border-radius": "0.5rem",
  

      }}
    >
      <Container maxWidth="xl"  >
        <Toolbar disableGutters >
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
             

            }}
          >
            <img
              // style={{ height: "40px", "margin-left": "10px"}}
              src={Steinslogo}
              alt=""
              className="logo-Img"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={()=>handleCloseNavMenu('')}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={()=>handleCloseNavMenu('')}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(page.link)}
                  >
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img style={{ height: "35px" }} src={Steinslogo} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={()=>handleCloseNavMenu(page.link)}
                sx={{ my: 2, color: "white", display: "block" }}
                // onFocus={() => navigate(page.link)}
              >
                {page.text} 
              </Button>
            ))}
          </Box>
          <img
            // style={{ height: "30px", "margin-right": "20px", float: "left" }}
            src={SteinsGif2}
            alt=""
            className="epic-Gif"
          />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="../Images/usernameIcon.png" alt="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={()=> navigate(setting.link)}>{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
