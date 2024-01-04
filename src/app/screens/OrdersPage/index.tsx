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
import OrderApiService from "../../apiservices/orderApiService";
import { Member } from "../../../types/user";

//redux slice
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data))
});

export function OrdersPage(props: any) {
  // INITIALIZATIONSs //
  const [value, setValue] = useState("1");
  const { setPausedOrders, setFinishedOrders, setProcessOrders } =
    actionDispatch(useDispatch());
  const verifiedMemberData: Member | null = props.verifiedMemberData;

  useEffect(() => {
    const orderService = new OrderApiService();
    orderService
      .getMyOrders("paused")
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("process")
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders("finished")
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [props.orderRebuild]);

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
              <PausedOrders setOrderRebuild={props.setOrderRebuild} />
              <ProcessOrders setOrderRebuild={props.setOrderRebuild} />
              <FinishedOrders setOrderRebuild={props.setOrderRebuild} />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order_right">
          <Box className="order_info_box">
            <Box className="order_user_img" />
            <img
              className="user_img"
              style={{
                width: "117px",
                height: "112px",
                backgroundSize: "cover",
                borderRadius: "17px",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                marginTop: "-100px"
              }}
              src={verifiedMemberData?.mb_image}
              alt="picturehere"
            />
            <p className="order_user_name">{verifiedMemberData?.mb_nick}</p>
            <p className="order_user_prof">
              {verifiedMemberData?.mb_type ?? "Foydalanuvchi"}
            </p>
            <Box className="marginer"></Box>
            <Box className="order_user_address">
              <LocationOnIcon style={{ color: "#2E3A59" }} />
              <p>{verifiedMemberData?.mb_address ?? "manzil kiritilmagan"}</p>
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
