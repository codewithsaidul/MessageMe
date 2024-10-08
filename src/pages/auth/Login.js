import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom"
import AuthSocial from "../../sections/Auth/AuthSocial";
import LoginForm from "../../sections/Auth/LoginForm";



const Login = () => {




  return (
    <>
      <Stack spacing={2} sx={{ mb: 2, position: "relative" }}>
        <Typography variant="h3">
          Login to MessageMe
        </Typography>

        <Stack direction="row" spacing={.5}>
          <Typography variant="body2">
            New User?
          </Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">Create an Account</Link>
        </Stack>

        {/* Login Form */}
        <LoginForm />


        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
