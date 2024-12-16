import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";



const user_id = window.localStorage.getItem("user_id");



const initialState = {
    direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  group_chat: {},
  chatType: null,
  roomId: null,
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    selectConversation(state, action) {
      state.chatType = "individual";
      state.roomId = action.payload.roomId;
    },
    resetChatState(state) {
      state.chatType = null;
      state.roomId = null
    },
    fetchDirectConversations(state, action) {

      const conversation = action.payload.conversations || [];

      const list = conversation.map((el) => {
        const this_user = el.participants.find((elm) => elm._id.toString() !== user_id);

        return {
          id: el._id,
          user_id: this_user?._id,
          name: `${this_user?.firstName} ${this_user?.lastName}`,
          online: this_user?.status === "Online",
          img: faker.image.avatar(),
          msg: faker.music.songName(),
          time: "9:36",
          unread: 0,
          pinned: false,
          about: this_user?.about,
        }
      })

      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {

      const this_conversation = action.payload.conversation;
       
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el?.id !== this_conversation._id) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (elm) => elm._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user?._id,
              name: `${user?.firstName} ${user?.lastName}`,
              online: user?.status === "Online",
              img: faker.image.avatar(),
              msg: faker.music.songName(),
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (elm) => elm._id.toString() !== user_id
      );
      state.direct_chat.conversations = state.direct_chat.conversations.filter(
        (el) => el?.id !== this_conversation._id
      );
      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user?._id,
        name: `${user?.firstName} ${user?.lastName}`,
        online: user?.status === "Online",
        img: faker.image.avatar(),
        msg: faker.music.songName(),
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
  },
});

// Reducer

export default slice.reducer;

// ----------------------------------------------------------------------



export const SelectConversation = ({roomId}) => {
  return (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({roomId}))
  }
}

export const ResetChatState = () => {
  return (dispatch, getState) => {
    dispatch(slice.actions.resetChatState())
  }
}



export const FetchDirectConversations = ({conversation}) => {
    return async (dispatch, getState) => {
      dispatch(slice.actions.fetchDirectConversations(conversation))
    }
}


export const AddDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};
export const UpdateDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};





