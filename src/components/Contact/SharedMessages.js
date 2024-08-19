import { Box, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import Media from "../SharedMessage/Media";
import Links from "../SharedMessage/Links";
import Docs from "../SharedMessage/Docs";

const SharedMessages = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
          }}
        >
          <Stack
            p={2}
            sx={{ height: "100" }}
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>


        {/* Tabs */}
          <Tabs sx={{px: 2, pt: 2}} value={value} onChange={handleChange} centered>
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Docs" />
          </Tabs>


        {/* Body */}

          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexGrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            {
                (() => {
                    switch (value) {
                        case 0:
                            return <Media />
                        case 1:
                            return <Links />
                        case 2:
                            return <Docs />
                        default:
                            return <></>;
                    }
                })()
            }
          </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessages;
