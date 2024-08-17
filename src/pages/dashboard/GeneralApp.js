import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./ChatList/ChatList";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {


  const theme = useTheme();

  const { sidebar } = useSelector((store) => store.app)

  return (
    <Stack direction="row">
      {/* Chats List */}
      <Chats />

      {/* Converstion */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          background: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {/* Contact */}
      {
        sidebar.open && <Contact />
      }
    </Stack>
  );
};

export default GeneralApp;
