import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();

  return (
    <Stack sx={{ height: "100%", maxHeight: "100vh", width: "auto" }}>
      {/* Chat Header */}
      <Box
        p={2}
        sx={{
          width: "100%",
          background:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Header />
      </Box>
      {/* Chat Header */}

      {/* Messages */}
      <Box width="100%"  sx={{ flexGrow: 1, overflow: "auto", // Enable scrolling
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for WebKit browsers
            // "-ms-overflow-style": "none", // Hide scrollbar for Internet Explorer and Edge
            "scrollbar-width": "none",
            height: "100%", }}>
        <Message menu={true} />
      </Box>
      {/* Messages */}

      {/* Chat Footer */}
      <Box
        p={2}
        sx={{
          width: "100%",
          background:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Footer />
      </Box>
      {/* Chat Footer */}
    </Stack>
  );
};

export default Conversation;
