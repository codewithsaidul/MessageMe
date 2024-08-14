import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import {  useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import IOSSwitch from "../IosSwitch";



const SideBar = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  const {onToggleMode} = useSettings();


  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem('switchState') === 'true';
    setChecked(savedState);
  }, []);

  const handleChange = (event) => {
    const newCheckedState = event.target.checked;
    setChecked(newCheckedState);
    localStorage.setItem('switchState', newCheckedState);

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
                  onClick={() => setSelected(el.index)}
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
                onClick={() => setSelected(3)}
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
          
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
