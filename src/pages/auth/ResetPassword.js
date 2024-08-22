import { Link, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { Link as RouterLink } from 'react-router-dom'
import AuthResetPasswordForm from '../../sections/Auth/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb: 5, position: "relative"}}>
      <Typography variant="h3" paragraph>
         Forgate Password
      </Typography>
      <Typography sx={{color: "text.secondary", mb: 5}}>
         Please Enter The Email Address Associate With Your Account And We Will Email You A Link To Reset Your Password
      </Typography>

      {/* Reset Password Form */}
      <AuthResetPasswordForm />
      {/* Reset Password Form */}

      <Link
        component={RouterLink}
        to={"/auth/login"}
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={24} />
        Return to sign in
      </Link>
    </Stack>
    </>
  )
}

export default ResetPassword