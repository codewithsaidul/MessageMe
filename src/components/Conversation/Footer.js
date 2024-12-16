import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PaperPlaneTilt } from "phosphor-react";
import StyledInput from "../StyledInput/StyledInput";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";



const Footer = () => {
  const theme = useTheme();

  const [openPicker, setOpenPicker] = useState(false)

  return (
    <Stack direction="row" alignItems="center" spacing={3}>
      {/* Chat Input */}
      <Stack width="100%">
        <Box sx={{display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100}}>
          <Picker
            theme={theme.palette.mode}
            data={data}
            onEmojiSelect={console.log}
          />
        </Box>
        <StyledInput openPicker={openPicker} setOpenPicker={setOpenPicker} />
      </Stack>
      {/* Chat Input */}

      <Box
        sx={{
          height: 48,
          width: 48,
          background: theme.palette.primary.main,
          borderRadius: 1.5,
        }}
      >
        <Stack
          sx={{ width: "100%", height: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          <IconButton>
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Footer;
