import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
// REDUX
import {  useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
  retrievePausedOrders
} from "./selector";

/**REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders
  })
);

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

export default function PausedOrders(props: any) {
  /**INITIALIZATIONS */
  // const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order, index) => (
          <Box className={"order_main_box"}>
            <Box className={"order_box_scroll"}>
              {order.map((item, itemIndex) => {
                const image_path = "/dishes/shashlik-4.jpg";
                return (
                  <Box className={"ordersName_price"}>
                    <img src={image_path} className={"orderDishImg"} alt="" />
                    <p className={"titleDish"}>Arab Shashlik</p>
                    <Box className={"priceBox"}>
                      <p>$7</p>
                      <img
                        src="/icons/Close.svg"
                        alt="close"
                        style={{ marginLeft: "3px" }}
                      />
                      <p style={{ marginLeft: "3px" }}>3</p>
                      <img
                        src="/icons/Pause.svg"
                        alt="pause"
                        style={{ marginLeft: "3px" }}
                      />
                      <p style={{ marginLeft: "3px" }}>$21</p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box className={"total_price_box black_solid"}>
              <Box className={"boxTotal"}>
                <p>mahsulot:$21 </p>
                <img src="/icons/Plus.svg" alt="plus" />
                <p>yetkazish:$2</p>
                <img src="/icons/pause.svg" alt="pause" />
                <p>jami:$23</p>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  style={{
                    background: "red",
                    color: "white",
                    marginRight: "15px"
                  }}>
                  Bekor qilish
                </Button>
                <Button
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
