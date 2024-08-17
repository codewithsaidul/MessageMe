import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSiderbar } from '../../redux/slices/app';


const Contact = () => {

  const theme = useTheme();

  const dispatch = useDispatch()

  return (
    <Box sx={{width: 320, height: "100vh"}}>
        <Stack sx={{height: "100%"}}>
            <Box sx={{
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
              width: "100%",
              backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
            }}>
                <Stack p={2} sx={{height: "100"}} direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
                    <Typography variant="subtitle2">Contact Info</Typography>
                    <IconButton onClick={() => {
                      dispatch(ToggleSiderbar())
                    }}>
                      <X />
                    </IconButton>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Contact