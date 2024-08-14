import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import StyledBadge from "../StyleBadge/StyledBadge";

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const Conversation = () => {

  const theme = useTheme();

  return (
    <Stack sx={{ height: "100%", maxHeight: "100vh", width: "auto" }}>
      {/* Chat Header */}
      <Box
        p={2}
        sx={{
          width: "100%",
          background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%", height: "100%" }}
        >
          {/* User Profile & Online Status */}
          <Stack direction="row" spacing={2}>
            {/* User Profile */}
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            </Box>

            {/* User Name & Status */}
            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}{" "}
              </Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>

          {/* Call, Video, Arrow Icon */}
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>

            <Divider orientation="vertical" flexItem />

            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* Chat Header */}

      {/* Messages */}
      <Box width="100%" sx={{ flexGrow: 1 }}></Box>
      {/* Messages */}

      {/* Chat Footer */}
      <Box
        p={2}
        sx={{
          width: "100%",
          background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Type Your Message..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          
          <Box sx={{height: 48, width: 48, background: theme.palette.primary.main, borderRadius: 1.5}}>
              <Stack sx={{width: "100%", height: "100%"}} alignItems="center" justifyContent="center">
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
              </Stack>
          </Box>
        </Stack>
      </Box>
      {/* Chat Footer */}
    </Stack>
  );
};

export default Conversation;
