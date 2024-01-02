import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import "../../../css/orders.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./pausedOrders";
import ProcessOrders from "./processOrder";
import FinishedOrders from "./finishedOrders";
import { Order } from "../../../types/order";
// REDUX
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setFinishedOrders, setProcessOrders } from "./slice";

//redux slice
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data))
});

export function OrdersPage() {
  // INITIALIZATIONSs //
  const [value, setValue] = useState("1");
  const { setPausedOrders, setFinishedOrders, setProcessOrders } =
    actionDispatch(useDispatch());

  useEffect(() => {}, []);

  // Handlers //
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}>
        <Stack className="order_left">
          <TabContext value={value}>
            <Box className="order_nav_frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}>
                  <Tab label="Buyurtmalarim" value="1" />
                  <Tab label="Jarayon" value="2" />
                  <Tab label="Yakunlangan" value="3" />
                </TabList>
              </Box>
            </Box>
            <Stack className="order_main_content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order_right">
          <Box className="order_info_box">
            <Box className="order_user_img" />
            <img src="/community/moto.svg" alt="picturehere" />
            <p className="order_user_name">Zumar Tustiy</p>
            <p className="order_user_prof">Foydalanuvchi</p>
            <Box className="marginer"></Box>
            <Box className="order_user_address">
              <LocationOnIcon style={{ color: "#2E3A59" }} />
              <p>Baraka</p>
            </Box>
          </Box>
          <Box className="payment_box">
            <form action="#">
              <input type="number" placeholder="Card number: " />
              <Box className="card_mid_input">
                <input
                  style={{ width: "162px", marginRight: "10px    " }}
                  type="date"
                  placeholder="7/24: "
                />
                <input
                  style={{ width: "162px" }}
                  type="number"
                  placeholder="CVV: 010: "
                />
              </Box>
              <input type="text" placeholder="Full name:" />
              <Box className="cards">
                <a href="#">
                  <img src="/icons/western-union.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/icons/mastercard.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/icons/paypal.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/icons/visa.svg" alt="" />
                </a>
              </Box>
            </form>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
