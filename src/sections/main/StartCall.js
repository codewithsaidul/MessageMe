import React from "react";
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/Chat/CallLogElement";
import { MemberList } from "../../data";



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      {/* Dialog Title */}
      <DialogTitle mb={3}>Start a New Call</DialogTitle>

      {/* Dialog Content */}
      <DialogContent sx={{ mt: 4 }}>
        {/* Search Stack */}
        <Stack spacing={3}>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
        </Stack>

        {/* Call List */}
        {
          MemberList.map((el) => <CallElement key={el.id} {...el} />)
        }
        
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
