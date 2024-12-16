import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../../components/Search";
// import { ChatList } from "../../../data";
import ChatElement from "../../../components/Chat/ChatElement";
import { useState, useEffect } from "react";
import Friends from "../../../sections/main/Friends";
import { socket } from "../../../socket";
import { useDispatch, useSelector } from "react-redux";
import { FetchDirectConversations } from "../../../redux/slices/conversations";




const user_id = window.localStorage.getItem("user_id");




const Chats = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const {conversations} = useSelector((state) => state.conversation.direct_chat);

  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      console.log(data); // this data is the list of conversations
      // dispatch action

      dispatch(FetchDirectConversations({ conversation: data }));
    });
  }, [dispatch]);



  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relaive",
          // left: 100,
          // height: "100%"
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
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

            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton onClick={handleOpenDialog}>
                <Users />
              </IconButton>

              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
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
            {/* <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>

              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement key={el.id} {...el} />;
              })}
            </Stack> */}

            {/* All Chat List */}
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>

              {conversations.filter((el) => !el.pinned).map((el) => {
                return <ChatElement key={el.id} {...el} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Friends Feature */}
      {
        openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />
      }
    </>
  );
};

export default Chats;
