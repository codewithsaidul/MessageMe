/* eslint-disable array-callback-return */
import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./MsgTypes";

const Message = () => {
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
                  return <MediaMsg key={el.message} el={el} />
                case "doc":
                  // doc msg
                  return <DocMsg key={el.message} el={el} />;
                case "link":
                  // link msg
                  return <LinkMsg key={el.message} el={el} />
                case "reply":
                  // reply msg
                  return <ReplyMsg key={el.message} el={el} />

                default:
                  // message
                  return <TextMsg key={el.message} el={el} />
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
