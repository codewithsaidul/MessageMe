import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/Auth/VerifyForm";
import { useSelector } from "react-redux";

const Verify = () => {

  const { email } = useSelector((state) => state.auth)

  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3">Please Verify OTP</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">
            Sent To Email {email}
          </Typography>
        </Stack>
      </Stack>

      {/* Verify Form */}
      <VerifyForm />
    </>
  );
};

export default Verify;
