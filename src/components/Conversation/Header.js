import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
} from "phosphor-react";
import StyledBadge from "../StyleBadge/StyledBadge";
import { faker } from "@faker-js/faker";

const Header = () => {
  return (
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
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          </StyledBadge>
        </Box>

        {/* User Name & Status */}
        <Stack spacing={0.2}>
          <Typography variant="subtitle2">{faker.name.fullName()} </Typography>
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
  );
};

export default Header;
