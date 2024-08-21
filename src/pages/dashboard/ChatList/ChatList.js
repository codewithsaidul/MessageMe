import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import {  useTheme } from "@mui/material/styles";

import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../components/Search";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../../data";
import StyledBadge from "../../../components/StyleBadge/StyledBadge";



const ChatElement = ({ id, name, msg, img, time, unread, pinned, online }) => {

  const theme = useTheme()

  return (
    <Box
      sx={{
        width: "100%",
        // height: 60,
        borderRadius: 1,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
      }}
      p={1}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} direction="column" alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chats = () => {

  const theme = useTheme()

  return (
    <Box
      sx={{
        position: "relaive",
        // left: 100,
        // height: "100%"
        width: 320,
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        {/* Top Stack */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        {/* Search Stack */}
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>

        {/* Archive Stack */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>

          <Divider />
        </Stack>

        {/*  Chat User List*/}
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            flexGrow: 1,
            overflow: "auto", // Enable scrolling
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
            // "-ms-overflow-style": "none", // Hide scrollbar for Internet Explorer and Edge
            "scrollbar-width": "none",
            height: "100%",
          }}
        >


          {/* Pinned Chat List */}
          <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>

              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement key={el.id} {...el} />;
              })}
            </Stack>

            {/* All Chat List */}
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>

              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement key={el.id} {...el} />;
              })}
            </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
