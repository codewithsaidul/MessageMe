import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegistorForm from "../../sections/Auth/RegistorForm";
import AuthSocial from "../../sections/Auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 2, position: "relative" }}>
        <Typography variant="h3">Get Started With Chit Chat</Typography>

        <Stack direction="row" spacing={0.5} alignItems="center">
          <Typography variant="body2">Already Have An Account?</Typography>
          <Link to="/auth/login"  component={RouterLink} variant="subtitle2">
            Sign In Here
          </Link>
        </Stack>


        {/* Register Here */}
        <RegistorForm />
        {/* Register Here */}

        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
          letterSpacing={.5}
        >
          {"By Signing Up, I Agree "} 
          <Link underline="always" color="text.primary">
            Terms of Service
          </Link> 
          {" and "} 
          <Link underline="always" color="text.primary">
            Privacy & Policy
          </Link>
        </Typography>

        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
