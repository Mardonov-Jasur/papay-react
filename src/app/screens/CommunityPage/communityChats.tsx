import { Avatar, Box, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";

const CommunityChats = () => {
  /**INITIALIZATIONS */
  const [messageList, setMessageList] = React.useState([]);
  const socket = useContext(SocketContext)
    const [onlineUsers, setOnlineUsers] = useState<number>(0);

  useEffect(() => {
    socket.connect()
    console.log("PRINTED")

       socket?.on("connect", (msg: any) => {
         console.log("Client connected");
       });

       socket?.on("newMsg", (new_msg: any) => {
         console.log("Client: new message");
       });

       
    socket?.on("greetMsg", (new_msg: any) => {
      console.log("Client: greet message");
    });

    socket?.on("infoMsg", (msg: any) => {
       console.log("Client: info message");
      setOnlineUsers(msg.total)
    })

    return () => {
      socket.disconnect();
    }
  }, [socket])

  return (
    <Stack className="chat_frame">
      <Box className="chat_top">Jonli Muloqot {onlineUsers}</Box>
      <Stack className="chat_content">
        <span className="chiziq"></span>
        <Box className="chat_main">
          <Box className="chat_main_right">
            <div className="msg_right">Hello</div>
          </Box>
          <Box className="chat_main_left">
            <Avatar alt="Jonny" src="/comunity/user1.svg" />
            <div className="msg_left">Hi! How are you?</div>
          </Box>
          <Box className="chat_main_right">
            <div className="msg_right">Fine</div>
          </Box>
        </Box>
      </Stack>
      <Box className="chat_bott">
        <input
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo'natish"
        />
        <button className="send_msg_btn">
          <SendIcon />
        </button>
      </Box>
    </Stack>
  );
};

export default CommunityChats;
