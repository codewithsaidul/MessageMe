/* eslint-disable array-callback-return */
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./MsgTypes";

const Message = ( { menu } ) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // TimeLine
              return <TimeLine key={el.text} el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg key={el.message} el={el} menu={menu} />
                case "doc":
                  // doc msg
                  return <DocMsg key={el.message} el={el} menu={menu} />;
                case "link":
                  // link msg
                  return <LinkMsg key={el.message} el={el} menu={menu} />
                case "reply":
                  // reply msg
                  return <ReplyMsg key={el.message} el={el} menu={menu} />

                default:
                  // message
                  return <TextMsg key={el.message} el={el} menu={menu} />
              }

            default:
              <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
