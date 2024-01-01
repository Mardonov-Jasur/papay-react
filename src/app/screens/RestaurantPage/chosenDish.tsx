import React, { useEffect, useState } from "react";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Checkbox from "@mui/material/Checkbox";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";
import { useParams } from "react-router-dom";
import { Product } from "../../../types/product";
import { Restaurant } from "../../../types/user";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveChosenProduct, retrieveChosenRestaurant } from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenRestaurant, setChosenProduct } from "./slice";
import ProductApiService from "../../apiservices/productApiService";
import RestaurantApiService from "../../apiservices/restaurantApiService";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiservices/memberApiService";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert
} from "../../../lib/sweetAlert";

/**REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenProduct: (data: Product) => dispach(setChosenProduct(data)),
  setChosenRestaurant: (data: Restaurant) => dispach(setChosenRestaurant(data))
});

/**REDUX SELECTOR */
const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenRestaurant) => ({
    chosenRestaurant
  })
);

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  /**INITIALIZATIONS */
  let { dish_id } = useParams<{ dish_id: string }>();
  const { setChosenProduct, setChosenRestaurant } = actionDispatch(
    useDispatch()
  );
  const { chosenProduct } = useSelector(chosenProductRetriever);
  console.log("chosenProduct:::::::::::", chosenProduct);
  const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
  console.log("chosenProduct:::::::::::", chosenRestaurant);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const dishRelatedProcess = async () => {
    try {
      const productService = new ProductApiService();
      const product: Product = await productService.getChosenDish(dish_id);
      setChosenProduct(product);
      console.log("Product:", product);

      const restaurantService = new RestaurantApiService();
      const restaurant = await restaurantService.getChosenRestaurant(
        product.restaurant_mb_id
      );
      setChosenRestaurant(restaurant);
    } catch (err) {
      console.log(`dishRelatedProcess, ERROR`, err);
    }
  };
  useEffect(() => {
    dishRelatedProcess().then();
  }, [productRebuild]);

  /**HANDLERS */
  const targetLikeProduct = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);

      const memberService = new MemberApiService(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: e.target.id,
          group_type: "product"
        });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeProduct, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            slidesPerView={chosenProduct?.product_images.length}
            modules={[FreeMode, Navigation, Thumbs]}>
            {chosenProduct?.product_images.map((ele: string) => {
              const image_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="dish_swiper_2"
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={false}
            loop={true}>
            {chosenProduct?.product_images.map((ele) => {
              const image_path = `${serverApi}/${ele}`;
              return (
                <SwiperSlide className="dish_slider">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_name">{chosenProduct?.product_name}</strong>
            <span className="chef_name">{chosenRestaurant?.mb_nick}</span>
            <Box className="rating_box">
              <Rating
                style={{ fontSize: "35px" }}
                name="half_rating"
                defaultValue={3.3}
                precision={0.5}
              />
              <div className="evalution_box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "30px"
                  }}>
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                    id={chosenProduct?._id}
                    onClick={targetLikeProduct}
                    checked={
                      chosenProduct?.me_liked &&
                      !!chosenProduct?.me_liked[0]?.my_favorite
                    }
                  />

                  <span>{chosenProduct?.product_likes}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon
                    style={{ color: "#979797" }}
                    sx={{ mr: "7px" }}
                  />
                  <span>{chosenProduct?.product_views}</span>
                </div>
              </div>
            </Box>
            <p>
              {chosenProduct?.product_description
                ? chosenProduct?.product_description
                : "no description"}
            </p>
            <Marginer
              direction="horizontal"
              height="1.5"
              width="100%"
              bg="#000000"
            />
            <div className="dish_price">
              <span>Narxi:</span>
              <span>${chosenProduct?.product_price}</span>
            </div>
            <div className="button_box">
              <Button
                style={{ width: "230px", height: "44px" }}
                variant="contained">
                Savatga Qo'shish
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
