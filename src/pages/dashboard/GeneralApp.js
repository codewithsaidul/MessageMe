import { Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./ChatList/ChatList";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/Contact/SharedMessages";
import StarredMessages from "../../components/StarredMessages/StarredMessages";
import NoChat from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme();

  const { sidebar } = useSelector((store) => store.app);
  const { chatType, roomId } = useSelector((state) => state.conversation);


  return (
    <Stack direction="row">
      {/* Chats List */}
      <Chats />

      {/* Converstion */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          background:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {roomId !== null && chatType === "individual" ? (
          <Conversation />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <NoChat />
            <Typography variant="subtitle2">
              Select a conversation or start a{" "}
              <Link
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
                to="/"
              >
                new one
              </Link>
            </Typography>
          </Stack>
        )}
      </Box>

      {/* Contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "SHARED":
              return <SharedMessages />;
            case "STARRED":
              return <StarredMessages />;
            default:
              return <></>;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
