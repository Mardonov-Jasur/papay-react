import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";
import { sweetErrorHandling, sweetFailureProvider } from "../../../lib/sweetAlert";
import OrderApiService from "../../apiservices/orderApiService";

/**REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders
  })
);

export default function PausedOrders(props: any) {
  /**INITIALIZATIONS */
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /**HANDLERS */
   const deleteOrderHandler = async (event: any) => {
     try {
       console.log("id", event.target.value);

       const order_id = event.target.value;
       const data = { order_id: order_id, order_status: "DELETED" };

       if (!localStorage.getItem("member_data")) {
         sweetFailureProvider("Please login first", true);
       }

       let confirmation = window.confirm(
         "Buyurtmani bekor qilishni xohlaysizmi?"
       );
       if (confirmation) {
         const orderServer = new OrderApiService();
         await orderServer.updateOrderStatus(data).then();
         props.setOrderRebuild(new Date());
       }
     } catch (err) {
       console.log("deleteOrderHandler, ERROR:", err);
       sweetErrorHandling(err).then();
     }
   };

     const processOrderHandler = async (event: any) => {
       try {
         const order_id = event.target.value;
         const data = { order_id: order_id, order_status: "PROCESS" };

         if (!localStorage.getItem("member_data")) {
           sweetFailureProvider("Please login first", true);
         }

         let confirmation = window.confirm(
           "Buyurtmangizni to'lashni tasdiqlaysizmi?"
         );
         if (confirmation) {
           const orderServer = new OrderApiService();
           await orderServer.updateOrderStatus(data).then();
           props.setOrderRebuild(new Date());
         }
       } catch (err) {
         console.log("Error in deleting the Order", err);
         sweetErrorHandling(err).then();
       }
     };

  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order: Order) => (
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
                      <img src={image_path} className={"orderDishImg"} alt="" />
                      <p className={"titleDish"}>{product.product_name}</p>
                    </Box>
                    <Box className={"priceBox"}>
                      <p>${item.item_price}</p>
                      <img
                        src="/icons/Close.svg"
                        alt="close"
                        style={{ marginLeft: "3px" }}
                      />
                      <p style={{ marginLeft: "3px" }}>{item.item_quantity}</p>
                      <img
                        src="/icons/Pause.svg"
                        alt="pause"
                        style={{ marginLeft: "3px" }}
                      />
                      <p style={{ marginLeft: "3px" }}>
                        ${item.item_price * item.item_quantity}
                      </p>
                    </Box>
                  </Box>
                );
              })}
            </Box>

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
              <Box>
                <Button
                  value={order._id}
                  onClick={deleteOrderHandler}
                  variant="contained"
                  style={{
                    background: "red",
                    color: "white",
                    marginRight: "15px"
                  }}>
                  Bekor qilish
                </Button>
                <Button
                  value={order._id}
                  onClick={processOrderHandler}
                  variant="contained"
                  style={{
                    background: "#o288d1",
                    color: "white"
                  }}>
                  To'lash
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
