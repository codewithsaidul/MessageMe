import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import IOSSwitch from "../IosSwitch";
import { useNavigate } from "react-router-dom";






const getPaths = (index) => {
  switch (index) {
    case 0:
      return "/app"
    case 1:
      return "/group"
    case 2:
      return "/call"
    case 3:
      return "/settings"
    default:
      return <></>;
  }
}


const getMenuPaths = (index) => {
  switch (index) {
    case 0:
      return "/profile"
    case 1:
      return "/settings"
    case 2:
      // Todo => Update Token  & Set IsAuthenticated to false
      return "/auth/login"
    default:
      return <></>;
  }
}



const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  const [checked, setChecked] = useState(false);

  // Profile Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const savedState = localStorage.getItem("switchState") === "true";
    setChecked(savedState);
  }, []);


  // Localstorage for them
  const handleChange = (event) => {
    const newCheckedState = event.target.checked;
    setChecked(newCheckedState);
    localStorage.setItem("switchState", newCheckedState);

    // Call the parent component's onChange handler for theme color change
    if (onToggleMode()) {
      onToggleMode(event);
    }
  };

  return (
    <Box
      p={2}
      sx={{
        background: theme.palette.background.paper,
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
        sx={{ height: "100%" }}
      >
        <Stack alignItems={"center"} spacing={3}>
          {/* Logo */}
          <Box sx={{ width: 48, height: 48 }}>
            {/* sx={{background: theme.palette.primary.main, width: 64, height: 64, borderRadius: 1.5}} */}
            <img src={Logo} alt="Logo" />
          </Box>

          {/* Navigation Menu */}
          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index); 
                    navigate(getPaths(el.index))
                  }}
                  sx={{ width: "max-content" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: "70px" }} />

            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                  navigate(getPaths(3))
                }}
                sx={{ width: "max-content" }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        {/* Profile & Switch */}
        <Stack direction={"column"} alignItems={"center"} spacing={4}>
          {/* <Switch defaultChecked /> */}
          <IOSSwitch onChange={handleChange} checked={checked} />

          {/* Profile Menu */}
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, index) => (
                <MenuItem key={el.title} onClick={() => {
                  handleClose();
                }}>
                  <Stack
                    sx={{ width: 100 }}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    onClick={() => navigate(getMenuPaths(index))}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
