import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { CallList } from "../../data";
import { useState } from "react";
import StartCall from "../../sections/main/StartCall";
import { CallLogElement } from "../../components/Chat/CallLogElement";

const Call = () => {


  const theme = useTheme();
  const [openCall, setOpenCall] = useState(false)

  const handleCallClose = () => {
    setOpenCall(false)
  }

  return (
    <>
      <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            width: 320,
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            {/* Call Logs List Header */}
            <Stack>
              <Typography variant="h5">Call Logs</Typography>
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

            {/* Crete New Conversation Stack */}
            <Stack spacing={1}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                spacing={1.5}
              >
                <Typography variiant="subtitle2" component={Link}>
                  Start New Conversation
                </Typography>
                <IconButton
                  onClick={() => setOpenCall(true)}
                >
                  <Plus
                    size={24}
                    style={{ color: theme.palette.primary.main }}
                  />
                </IconButton>
              </Stack>

              <Divider />
            </Stack>

            {/*  Call Logs List*/}
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

                {/* Call Logs */}
                {
                  CallList.map((el) => <CallLogElement key={el.id} {...el} />)
                }
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Left */}
        {/* // Todo  => Reuse Conversation */}
      </Stack>

      {
        openCall && <StartCall open={openCall} handleClose={handleCallClose} />
      }
    </>
  );
};

export default Call;
