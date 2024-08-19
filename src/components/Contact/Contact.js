import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from "@mui/material/styles"
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSiderbar } from '../../redux/slices/app';
import { faker } from "@faker-js/faker"
import IOSSwitch from '../IosSwitch';


const Contact = () => {

  const theme = useTheme();

  const dispatch = useDispatch()

  return (
    <Box sx={{width: 320, height: "100vh"}}>
        <Stack sx={{height: "100%"}}>
          {/* Header */}
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


            {/* Body */}
            <Stack sx={{height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll"}} p={3} spacing={3}>
                  
                  {/* Contact Profile */}
                  <Stack>
                    <Stack alignItems="center" direction="row" spacing={2}>
                        <Avatar src={ faker.image.avatar()} alt={ faker.name.firstName()} sx={{height: 64, width: 64}} />
  
                        <Stack spacing={.7}>
                            <Typography variant="article" fontWeight={600}>
                              { faker.name.fullName()}
                            </Typography>
                            <Typography variant="body2" fontWeight={400}>
                              { "+880 014 4578 6923" }
                            </Typography>
                        </Stack>
                    </Stack>
  
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                          <Stack spacing={1} alignItems="center">
                            <IconButton>
                              <Phone />
                            </IconButton>
                            <Typography variant="overline">
                              Voice
                            </Typography>
                          </Stack>
                          <Stack spacing={1} alignItems="center">
                            <IconButton>
                              <VideoCamera />
                            </IconButton>
                            <Typography variant="overline">
                              Video
                            </Typography>
                          </Stack>
                    </Stack>
                  </Stack>

                  {/* Divider */}
                  <Divider />
                  {/* Divider */}

                {/* Contact About */}
                  <Stack spacing={0.5}>
                    <Typography variant="article">
                      About
                    </Typography>
                    <Typography variant="body2">
                        Hey There, I'm Using ChitChat
                    </Typography>
                  </Stack>

                  {/* Divider */}
                  <Divider />
                  {/* Divider */}

                    {/* Contact Media */}
                  <Stack>
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Typography variant="subtitle2">Media, Links & Docs</Typography>
                        <Button endIcon={<CaretRight />}>
                          201
                        </Button>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={2}>
                          {
                            [1, 2, 3].map(() => 
                              (<Box>
                                <img src={faker.image.cats()} alt="media" />
                              </Box>
                            ))
                          }
                      </Stack>
                  </Stack>

                  {/* Divider */}
                  <Divider />
                  {/* Divider */}

                  {/* Starred Message */}
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction={"row"} alignItems="center" spacing={2}>
                        <Star size={24} />
                        <Typography variant="subtitle2">Starred Message</Typography>
                    </Stack>

                    <IconButton>
                      <CaretRight />
                    </IconButton>
                  </Stack >

                  {/* Divider */}
                  <Divider />
                  {/* Divider */}


                  {/* Mute Notification */}
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction={"row"} alignItems="center" spacing={2}>
                        <Bell size={24} />
                        <Typography variant="subtitle2">Mute Notification</Typography>
                    </Stack>

                    <IconButton>
                      <IOSSwitch />
                    </IconButton>
                  </Stack >

                  {/* Divider */}
                  <Divider />
                  {/* Divider */}

                  {/* Contact Footer */}
                  <Stack spacing={2}>
                    <Typography>
                      1 Group In Common
                    </Typography>

                    <Stack direction={"row"} alignItems="center" spacing={2}>
                      <Avatar src={ faker.image.avatar()} alt={ faker.name.firstName} />
                      <Stack spacing={0.5}>
                        <Typography variant="subtitle2">Coding Monk</Typography>
                        <Typography variant="caption">Owl, Parret, Rabit, You</Typography>
                      </Stack>
                    </Stack>

                    <Stack direction={"row"} alignItems="center" spacing={2}>
                      <Button startIcon={ <Prohibit /> } fullWidth variant="outlined">
                        Blocking
                      </Button>
                      <Button startIcon={ <Trash /> } fullWidth variant="outlined">
                        Delete
                      </Button>
                    </Stack>
                  </Stack>

            </Stack>
        </Stack>
    </Box>
  )
}

export default Contact