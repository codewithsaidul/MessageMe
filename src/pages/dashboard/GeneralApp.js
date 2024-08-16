import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chats from "./ChatList/ChatList";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction="row">
      {/* Chats List */}
      <Chats />

      {/* Converstion */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          background: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
