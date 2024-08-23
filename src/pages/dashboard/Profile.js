import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/main/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} sx={{ width: "100%" }}>
        {/* Left */}

        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            width: 320,
          }}
        >
            <Stack p={4} spacing={5}>

                {/* Profile Header */}
                <Stack direction="row" alignItems={"center"} spacing={3}>
                    <IconButton>
                        <CaretLeft size={24} color="#4B4B4B" />
                    </IconButton>
                    <Typography variant="h4">
                        Profile
                    </Typography>
                </Stack>

                {/* Profile Form */}
                <ProfileForm />
            </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
