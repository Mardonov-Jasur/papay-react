import { Avatar, Box, Stack } from "@mui/material";
import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import SendIcon from "@mui/icons-material/Send";
import { SocketContext } from "../../context/socket";
import {
  ChatGreetMsg,
  ChatInfoUsers,
  ChatMessage,
  NewMessageProps
} from "../../../types/others";
import {
  sweetErrorHandling,
  sweetFailureProvider
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import { RippleBadge } from "./../../MaterialTheme/styled";
import { verifyMemberData } from "../../apiservices/verify";

const NewMessage: FC<NewMessageProps> = ({ data, key }) => {
  if (!data) {
    return null;
  }

  const { mb_id, msg, mb_nick, mb_image } = data;
  if (mb_id === verifyMemberData?._id) {
    return (
      <Box className="chat_main_right">
        <div className="msg_right">{msg}</div>
      </Box>
    );
  } else {
    return (
      <Box className="chat_main_left">
        <Avatar alt={mb_nick} src={mb_image ?? "/comunity/user1.svg"} />
        <div className="msg_left">{msg}</div>
      </Box>
    );
  }
  return null;
};
const CommunityChats = () => {
  const textInput: any = useRef(null);
  const [messageList, setMessageList] = useState<Array<ReactElement<any>>>([]);
  const socket = useContext(SocketContext);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    console.log("hello");
  }, []);

  useEffect(() => {
    socket.connect();

    socket?.on("connect", (msg: any) => {
      console.log("Client connected");
    });

    // socket?.on("createMsg", (new_msg: any) => {
    //   console.log("Client: greet message");
    // });

    socket?.on("newMsg", (new_msg: ChatMessage) => {
      setMessageList((prevList) => [
        ...prevList,
        <NewMessage data={new_msg} key={prevList.length} />
      ]);
      console.log("Client: new message");
    });

    socket?.on("greetMsg", (new_msg: ChatGreetMsg) => {
      setMessageList((prevList) => [
        ...prevList,
        <p
          style={{
            textAlign: "center",
            fontSize: "large",
            fontFamily: "Poppins"
          }}>
          {new_msg.text}, dear {verifyMemberData?.mb_nick ?? "guest"}
        </p>
      ]);
      console.log("Client: greet message");
    });

  socket?.on("infoMsg", (msg: any) => {
       console.log("Client: info message");
      setOnlineUsers(msg.total)
    })

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  //Handler//

  const getInputMessageHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      setMessage(text);
    },
    [message]
  );

  const getKeyHandler = (e: any) => {
    try {
      if (e.key === "Enter") {
        assert.ok(message, Definer.input_err2);
        onClickHandler();
      }
    } catch (err: any) {
      console.log(`getKeyHandler, ERROR: ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const onClickHandler = () => {
    try {
      if (!verifyMemberData) {
        textInput.current.value = "";
        sweetFailureProvider("Please login first", true);
        return false;
      }

      textInput.current.value = "";
      assert.ok(message, Definer.input_err3);

      const mb_image_url = verifyMemberData?.mb_image ?? "/auth/user_3.webp";
      socket.emit("createMsg", {
        msg: message,
        mb_id: verifyMemberData?._id,
        mb_nick: verifyMemberData?.mb_nick,
        mb_image: mb_image_url
      });
      setMessage("");
    } catch (err: any) {
      console.log(`onClickHandler, ERROR: ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Stack className="chat_frame">
      <Box className="chat_top">
        Jonli Muloqot
        <RippleBadge
          style={{ margin: "-30px 0 0 20px" }}
          badgeContent={onlineUsers}
        />
      </Box>
      <Stack className="chat_content">
        <span className="chiziq"></span>
        <Box className="chat_main">
          <Box className="chat_main_left">
            <div className="msg_left">Bu yer jonli muloqot</div>
          </Box>
          {messageList}
        </Box>
      </Stack>
      <Box className="chat_bott">
        <input
          ref={textInput}
          type="text"
          name="message"
          className="msg_input"
          placeholder="Xabar jo'natish"
          onChange={getInputMessageHandler}
          onKeyDown={getKeyHandler}
        />
        <button className="send_msg_btn" onClick={onClickHandler}>
          <SendIcon />
        </button>
      </Box>
    </Stack>
  );
};

export default CommunityChats;

// import { Avatar, Box, Stack } from "@mui/material";
// import React, { useContext, useEffect, useState } from "react";
// import SendIcon from "@mui/icons-material/Send";
// import { SocketContext } from "../../context/socket";

// const CommunityChats = () => {
//   /**INITIALIZATIONS */
//   const [messageList, setMessageList] = React.useState([]);
//   const socket = useContext(SocketContext)
//     const [onlineUsers, setOnlineUsers] = useState<number>(0);

//   useEffect(() => {
//     socket.connect()
//     console.log("PRINTED")

//        socket?.on("connect", (msg: any) => {
//          console.log("Client connected");
//        });

//        socket?.on("newMsg", (new_msg: any) => {
//          console.log("Client: new message");
//        });

//     socket?.on("greetMsg", (new_msg: any) => {
//       console.log("Client: greet message");
//     });

//     socket?.on("infoMsg", (msg: any) => {
//        console.log("Client: info message");
//       setOnlineUsers(msg.total)
//     })

//     return () => {
//       socket.disconnect();
//     }
//   }, [socket])

//   return (
//     <Stack className="chat_frame">
//       <Box className="chat_top">Jonli Muloqot {onlineUsers}</Box>
//       <Stack className="chat_content">
//         <span className="chiziq"></span>
//         <Box className="chat_main">
//           <Box className="chat_main_right">
//             <div className="msg_right">Hello</div>
//           </Box>
//           <Box className="chat_main_left">
//             <Avatar alt="Jonny" src="/comunity/user1.svg" />
//             <div className="msg_left">Hi! How are you?</div>
//           </Box>
//           <Box className="chat_main_right">
//             <div className="msg_right">Fine</div>
//           </Box>
//         </Box>
//       </Stack>
//       <Box className="chat_bott">
//         <input
//           type="text"
//           name="message"
//           className="msg_input"
//           placeholder="Xabar jo'natish"
//         />
//         <button className="send_msg_btn">
//           <SendIcon />
//         </button>
//       </Box>
//     </Stack>
//   );
// };

// export default CommunityChats;
