import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests, FetchFriends, FetchUsers } from "../../redux/slices/users";
import { FriendElement, FriendRequestElement, UserElement } from "../../components/Chat/friend";

const UsersList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(FetchUsers());
  }, [dispatch]);

  return (
    <>
      {users.map((el, idx) => {
          return <UserElement key={idx} {...el} />;
      })}
    </>
  );
};


const FriendsList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.users);
  console.log(friends)

  useEffect(() => {
    dispatch(FetchFriends());
  }, [dispatch]);

  return (
    <>
      {friends.map((el, idx) => {
          return <FriendElement key={idx} {...el} />;
      })}
    </>
  );
};



const FriendRequestList = () => {
  const dispatch = useDispatch();

  const { friendRequests } = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, [dispatch]);

  return (
    <>
      {friendRequests.map((el, idx) => {
        console.log(el.sender)
          return <FriendRequestElement key={idx} {...el.sender} />;
      })}
    </>
  );
};




const Friends = ({ open, handleClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      keepMounted
      onClose={handleClose}
      sx={{ p: 4 }}
    >
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore" />
          <Tab label="Friends" />
          <Tab label="Request" />
        </Tabs>
      </Stack>

      {/* Dialog Content */}
      <DialogContent>
        <Stack sx={{ height: "100%" }}>
          <Stack spacing={0.5}>
            {(() => {
              switch (value) {
                case 0:
                  return <UsersList />; //Display All User
                case 1:
                  return <FriendsList />; //Display All Friends
                case 2:
                  return <FriendRequestList />; //display all friends request

                default:
                  return <></>;
              }
            })()}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
