import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/toast";
import { AddDirectConversation, SelectConversation, UpdateDirectConversation } from "../../redux/slices/conversations";





const DashboardLayout = () => {



  const { conversations, current_conversation } = useSelector(
    (state) => state.conversation.direct_chat
  );


  console.log(conversations)


  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const user_id = window.localStorage.getItem("user_id");



  useEffect(() => {


    if(isLoggedIn) {
      window.onload = function () {
        if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
        }
      }

      window.onload();

      if(!socket) {
        connectSocket(user_id)
      }

      //  New_friend_request
      socket.on("new_friend_request", (data) => {
        dispatch(showSnackbar({severity: "success", message: data.message}))
      })


      socket.on("accept_request", (data) => {
        dispatch(showSnackbar({severity: "success", message: data.message}))
      })


      socket.on("friend_request", (data) => {
        dispatch(showSnackbar({severity: "success", message: data.message}))
      })


      socket.on("start_chat", (data) => {
          console.log(data);

          const existing_conversation = conversations.find((el) => el.id === data._id);

          if(existing_conversation) {
            dispatch(UpdateDirectConversation({conversation: data}))
          } else {
            // add drect conversation
            dispatch(AddDirectConversation({conversation: data}))
          }

          dispatch(SelectConversation({roomId: data._id}))
      })


    }


    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_send");
      socket?.off("start_chat)");
    }

  }, [isLoggedIn, user_id, dispatch, conversations])




  if(!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }


 


  return (
    <>
      <Stack direction={"row"}>
        {/* Side Bar */}
        <SideBar />
        {/* Side Bar */}
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
