import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import {  useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveFinishedOrders } from "./selector";
import { Order } from "../../../types/order";
import { Product } from "../../../types/product";
import { serverApi } from "../../../lib/config";

/**REDUX SELECTOR */
const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders
  })
);


export default function FinishedOrders(props: any) {
  /**INITIALIZATIONS */
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders?.map((order: Order) => (
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
            <Box className="finished">
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
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}
