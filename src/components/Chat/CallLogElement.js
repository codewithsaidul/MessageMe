import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StyledBadge from "../../components/StyleBadge/StyledBadge";
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from "phosphor-react";

const CallLogElement = ({ img, name, online, incoming, missed }) => {
  const theme = useTheme();

  return (
    <>
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              {/* <Typography variant="caption">{faker.date}</Typography> */}

              <Stack direction="row" alignItems="center" spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday, 21:53</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone size={24} color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({ img, name, online}) => {
  const theme = useTheme();

  return (
    <>
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img} alt={name} />
              </StyledBadge>
            ) : (
              <Avatar src={img} alt={name} />
            )}

            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              {/* <Typography variant="caption">{faker.date}</Typography> */}
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <IconButton>
              <Phone size={24} color="green" />
            </IconButton>
            <IconButton>
              <VideoCamera size={24} color="green" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallElement, CallLogElement };
