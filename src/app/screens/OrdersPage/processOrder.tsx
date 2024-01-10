import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import {  useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProcessOrders } from "./selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import moment from "moment";
import { sweetErrorHandling, sweetFailureProvider } from "../../../lib/sweetAlert";
import OrderApiService from "../../apiservices/orderApiService";
import { verifyMemberData } from "../../apiservices/verify";

/**REDUX SELECTOR */
const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders
  })
);



export default function ProcessOrders(props: any) {
  /**INITIALIZATIONS */
  const { processOrders } = useSelector(processOrdersRetriever);

  /**HANDLERS */
  const finishOrderHandler = async (event: any) => {
    try {
      console.log("id", event.target.value);

      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };

      if (!verifyMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmani olganingizni tasdiqlaysizmi?"
      );
      if (confirmation) {
        const orderServer = new OrderApiService();
        await orderServer.updateOrderStatus(data).then();
        props.setOrderRebuild(new Date());
      }
    } catch (err) {
      console.log("finishOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <TabPanel value="2">
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;
                  return (
                    <Box className={"ordersName_price"}>
                      <Box className={"new_box"}>
                        <img
                          src={image_path}
                          className={"orderDishImg"}
                          alt=""
                        />
                        <p className={"titleDish"}>{product.product_name}</p>
                      </Box>
                      <Box className={"priceBox"}>
                        <p>${item.item_price}</p>
                        <img src="/icons/Close.svg" alt="close" />
                        <p style={{ marginLeft: "3px" }}>
                          {item.item_quantity}
                        </p>
                        <img src="/icons/Pause.svg" alt="pause" />
                        <p> ${item.item_price * item.item_quantity}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="process">
                <Box className={"total_price_box black_solid"}>
                  <Box className={"boxTotal"}>
                    <p>
                      mahsulot:$
                      {order.order_total_amount - order.order_delivery_cost}
                    </p>
                    <img src="/icons/Plus.svg" alt="plus" />
                    <p>yetkazish:${order.order_delivery_cost}</p>
                    <img src="/icons/pause.svg" alt="pause" />
                    <p>jami:${order.order_total_amount}</p>
                  </Box>
                  <p className="data_compl" style={{ marginTop: "8px" }}>
                    {moment(order.craetedAt).format("YY-MM-DD HH:mm")}
                  </p>
                  <Button
                    value={order._id}
                    onClick={finishOrderHandler}
                    variant="contained"
                    style={{
                      background: "#o288d1",
                      color: "white",
                      borderRadius: "10px"
                    }}>
                    Yakunlash
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
