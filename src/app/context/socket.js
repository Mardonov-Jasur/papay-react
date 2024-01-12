// import React, { createContext } from "react";
// import socketio from "socket.io-client";
// import { serverApi } from "../../lib/config";

// export const socket = socketio.connect(serverApi);
// export const SocketContext = createContext();


import { io } from "socket.io-client";
import { serverApi } from "../../lib/config";
import { createContext } from "react";

export const socket = io(serverApi);
export const SocketContext = createContext();