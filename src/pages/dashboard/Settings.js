import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  CaretLeft,
  Bell,
  Lock,
  Key,
  PencilCircle,
  Image,
  Note,
  Keyboard,
  Info,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import ShortCutsDialog from "../../sections/settings/ShortCutsDialog";
import { useState } from "react";

const Settings = () => {
  const theme = useTheme();

  const [openShortCuts, setOpenShortCuts] = useState(false);

  const handleOpenShortCuts = () => {
    setOpenShortCuts(true);
  };

  const handleCloseShortCuts = () => {
    setOpenShortCuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      // onclick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortCuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left Panel */}
        <Box
          sx={{
            width: 320,
            overflowY: "auto", // Enable scrolling
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
            // "-ms-overflow-style": "none", // Hide scrollbar for Internet Explorer and Edge
            "scrollbar-width": "none",
            height: "100vh",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Setting Header */}
            <Stack direction="row" alignItems="center" spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>

              <Typography variant="h6">Settings</Typography>
            </Stack>

            {/* Setting Profile */}
            <Stack direction="row" alignItems="center" spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.firstName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">{faker.random.word()}</Typography>
              </Stack>
            </Stack>

            {/* Setting List of Options */}
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack
                      onClick={onclick}
                      sx={{ cursor: "pointer" }}
                      spacing={2}
                    >
                      <Stack alignItems={"center"} direction="row" spacing={2}>
                        {icon}
                        <Typography variant="body2">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>
        {/* Left Panel */}

        {/* Right Panel */}
      </Stack>

      {openShortCuts && (
        <ShortCutsDialog
          open={openShortCuts}
          handleClose={handleCloseShortCuts}
        />
      )}
    </>
  );
};

export default Settings;
