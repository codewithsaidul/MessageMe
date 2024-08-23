import {
    Avatar,
    Badge,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledBadge from "../../components/StyleBadge/StyledBadge";
import { faker } from "@faker-js/faker";




const ChatElement = ({ id, name, msg, img, time, unread, pinned, online }) => {
    const theme = useTheme();
  
    return (
      <Box
        sx={{
          width: "100%",
          // height: 60,
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={1}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
  
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Typography variant="caption">{msg}</Typography>
            </Stack>
          </Stack>
  
          <Stack spacing={2} direction="column" alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };
  


export default ChatElement;