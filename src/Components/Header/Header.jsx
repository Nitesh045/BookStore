import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ReactComponent as Education } from "../../Images/education (1).svg";
import "./Header.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FavoriteBorderOutlined,
  MarkunreadMailboxOutlined,
  SupervisorAccountOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { connect, useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../Services/DataServices";
import { type } from "@testing-library/user-event/dist/type";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  height: "33px",

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "33px",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "grey",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "grey",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledMenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#878787",
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: 12,
  "&:hover": { color: "#A03037", backgroundColor: "lightcoral" },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "maroon",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "none",
  },
}));

const StyledLogoutBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  margin: "10px",
  width: 120,
  borderColor: "#A03037",
  color: "#A03037",
  "&:hover": { color: "#A03037", borderColor: "#A03037" },
}));

function Header({ cart, cartLength }) {
  const [inputValue, SetInputValue] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorElProfile, setAnchorElProfile] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [active, setActive] = React.useState(false);
  const open = Boolean(anchorElProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (event) => {
    setAnchorElProfile(event.currentTarget);
    // document.getElementById("profile-btn").classList.remove("active");
    setActive(true);
  };
  const handleClose = () => {
    setAnchorElProfile(null);
    setActive(false);
    // document.getElementById("profile-btn").classList.add("active");
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const onLogout = () => {
    localStorage.clear();
    
    navigate("/login");
  };
  const handleInputChange = (e) => {
    SetInputValue(e.target.value);
    const query = e.target.value;
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };
  React.useEffect(() => {
    getCart();
  }, []);
  const cartLengths = useSelector((state) => state.CartReducer.cartLength);
  const memoCartLength = React.useMemo(() => {
    return cartLengths;
  }, [cartLengths]);

  async function getCart() {
    let response = await getCartItems();
    dispatch({ type: "GET_CART_ITEMS", payload: response.data.result });
  }

  console.log(inputValue);

  

  

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Search className="SearchExternal">
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#9D9D9D" }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search..." }}
          sx={{ color: "#9D9D9D" }}
          onChange={handleInputChange}
          value={inputValue}
        />
      </Search>
      <StyledMenuLink>
        <StyledMenuItem>
          <PersonOutlineOutlinedIcon /> Profile
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/myorder">
        <StyledMenuItem>
          <MarkunreadMailboxOutlined />
          My Orders
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/wishlist">
        <StyledMenuItem>
          <FavoriteBorderOutlined />
          My Wishlist
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledMenuLink to="/cart">
        <StyledMenuItem>
          <Badge badgeContent={memoCartLength} color="primary">
            <ShoppingCartOutlinedIcon /> Cart
          </Badge>
        </StyledMenuItem>
      </StyledMenuLink>
      <StyledLogoutBtn variant="outlined" onClick={onLogout}>
        Logout
      </StyledLogoutBtn>
    </Menu>
  );

  return (
    <Box sx={{ width: "100%", margin: "0px", top: "0%", left: "0px" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "maroon",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          height: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              textAlign: "center",
            }}
          >
            <Education />
            <span style={{ marginLeft: "5px" }}>BookStore</span>
          </Typography>

          <Box>
            <Search
              style={{ borderRadius: "3px", backgroundColor: "white" }}
              sx={{
                width: {
                  sm: "300px",
                  xm: "100px",
                  md: "350px",
                  lg: "500px",
                  xl: "800px",
                },
              }}
              className="searchInputStyle"
            >
              <SearchIconWrapper>
                <SearchIcon color="grey" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleInputChange}
                value={inputValue}
              />
            </Search>
          </Box>
        </div>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <StyledMenuLink>
            <StyledButton
              id="profile-btn"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={active ? "profile-btn" : ""}
              sx={{ px: 3 }}
              variant="contained"
            >
              <PersonOutlineOutlinedIcon />
              Nitesh
            </StyledButton>
          </StyledMenuLink>
          <Menu
            id="profile-btn-menu"
            anchorEl={anchorElProfile}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
              style: {
                width: 160,
                paddingLeft: 10,
              },
            }}
          >
            <Typography variant="body1" color="initial">
              Hello Poonam,
            </Typography>
            <StyledMenuLink to="/profile">
              <StyledMenuItem>
                <PersonOutlineOutlinedIcon
                  fontSize="sm"
                  style={{ marginRight: 10 }}
                />
                Profile
              </StyledMenuItem>
            </StyledMenuLink>
            {!window.location.href.includes("admin") && (
              <div>
                <StyledMenuLink to="/myorder">
                  <StyledMenuItem>
                    <MarkunreadMailboxOutlined
                      fontSize="sm"
                      style={{ marginRight: 10 }}
                    />
                    My Orders
                  </StyledMenuItem>
                </StyledMenuLink>
                <StyledMenuLink to="/wishlist">
                  <StyledMenuItem>
                    <FavoriteBorderOutlined
                      fontSize="sm"
                      style={{ marginRight: 10 }}
                    />
                    My Wishlist
                  </StyledMenuItem>
                </StyledMenuLink>
              </div>
            )}
            <StyledMenuLink
              to={
                location.pathname.includes("admin") ? "/signin" : "/admin-login"
              }
            >
              <StyledMenuItem>
                {location.pathname.includes("admin") ? (
                  <AccountCircle fontSize="sm" style={{ marginRight: 10 }} />
                ) : (
                  <SupervisorAccountOutlined
                    fontSize="sm"
                    style={{ marginRight: 10 }}
                  />
                )}
                {location.pathname.includes("admin") ? "User" : "Admin"}
              </StyledMenuItem>
            </StyledMenuLink>
            <StyledLogoutBtn variant="outlined" onClick={onLogout}>
              Logout
            </StyledLogoutBtn>
          </Menu>
          <StyledMenuLink to="/cart">
            <StyledButton variant="contained" sx={{ px: 4 }}>
              <Badge badgeContent={memoCartLength} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
              Cart
            </StyledButton>
          </StyledMenuLink>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
const mapStateToProps = (state) => ({
  cart: state.CartReducer.cart,
  cartLength: state.CartReducer.cartLength,
});
export default connect(mapStateToProps)(Header);
