import React, { useEffect, useState } from "react";
import { Box, Button, Container, Stack, Rating } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import { useParams } from "react-router";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveChosenRestaurant, retrieveRandomRestaurants, retrieveTargetProducs, retrieveTargetRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setRandomRestaurants, setChosenRestaurant, setTargetProducts } from "./slice";
import { Product } from "../../../types/product";
import { ProductSearchObj } from "../../../types/others";
import ProductApiService from "../../apiservices/productApiService";
import { data } from "dom7";
import { serverApi } from "../../../lib/config";


/**REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setRandomRestaurants: (data: Restaurant[]) =>
    dispach(setRandomRestaurants(data)),
  setChosenRestaurant: (data: Restaurant) =>
    dispach(setChosenRestaurant(data)),
  setTargetProducts: (data: Product[]) =>
    dispach(setTargetProducts(data))
});

/**REDUX SELECTOR */
const randomRestaurantsRetriever = createSelector(
  retrieveRandomRestaurants,
  (randomRestaurants) => ({
    randomRestaurants
  })
);
const chosenRestaurantRetriever = createSelector(
  retrieveChosenRestaurant,
  (chosenRestaurant) => ({
    chosenRestaurant
  })
);
const targetProductsRetriever = createSelector(
  retrieveTargetProducs,
  (targetProducts) => ({
    targetProducts
  })
);
   

export function OneRestaurant() {
    /**INITIALIZATIONS */
    let {restaurant_id} = useParams<{restaurant_id: string}> ();
    const {setRandomRestaurants, setChosenRestaurant, setTargetProducts} = actionDispatch(useDispatch());
    const {randomRestaurants} = useSelector(randomRestaurantsRetriever);
    const { chosenRestaurant } = useSelector(chosenRestaurantRetriever);
    const { targetProducts } = useSelector(targetProductsRetriever);
    const [chosenRestaurantId, setChosenRestaurantId] = useState<string>(restaurant_id);
     const [targetProductSearchObject, setTargetProductSearchObject] = useState<ProductSearchObj>({
        page: 1,
        limit: 8,
        order: "createdAt",
        restaurant_mb_id: restaurant_id,
        product_collection: "dish"
     });

     useEffect(() => {
      const productService = new ProductApiService();
      productService.getTargetProducts(targetProductSearchObject).then((data) => setTargetProducts(data)).catch((err) => console.log(err))
     }, [targetProductSearchObject])

     /**HANDLERS */
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar_big_box">
            <Box className="top_text">
              <p>Baraka Restaurant</p>
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action={""} method={""}>
                  <input
                    type={"search"}
                    className={"Single_searchInput"}
                    name={"Single_resSearch"}
                    placeholder={"Qidiruv"}
                  />
                  <Button
                    className={"Single_button_search"}
                    variant="contained"
                    endIcon={<SearchIcon />}>
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex" }}
            flexDirection={"row"}
            sx={{ mt: "35px" }}>
            <Box className={"prev_btn restaurant-prev"}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: 40 }}
                style={{ color: "white" }}
              />
            </Box>
            <Swiper
              className="restaurant_avatars_wrapper"
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev"
              }}>
              {/* {restaurant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className="restaurant_avatars">
                    <img src={"/restaurant/restaurant-1.jpeg"} alt="Photoo" />
                    <span>Kipr</span>
                  </SwiperSlide>
                );
              })} */}
            </Swiper>
            <Box
              className="next_btn restaurant-next"
              style={{ color: "white" }}>
              <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}>
            <Box className="dishs_filter_box">
              <Button variant="contained" color="secondary">
                new
              </Button>
              <Button variant="contained" color="secondary">
                price
              </Button>
              <Button variant="contained" color="secondary">
                likes
              </Button>
              <Button variant="contained" color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}>
            <Stack className="dish_category_box">
              <div className="dish_category_main">
                <Button variant="contained" color="secondary">
                  boshqa
                </Button>
                <Button variant="contained" color="secondary">
                  desert
                </Button>
                <Button variant="contained" color="secondary">
                  ichimlik
                </Button>
                <Button variant="contained" color="secondary">
                  ovqatlar
                </Button>
              </div>
            </Stack>

            <Stack className="dish_wrapper">
              {targetProducts.map((product: Product) => {
                const image_path = `${serverApi}/${product.product_images[0]}`
                const size_volume = product.product_collection === "drink" ? product.product_volume + "l" : product.product_size + " size";

                return (
                  <Box className="dish_box" key={product._id}>
                    <Box
                      className="dish_img"
                      sx={{ backgroundImage: `url(${image_path})` }}>
                      <div className="dish_sale">{size_volume}</div>
                      <Button
                        className="like_view_btn"
                        style={{ left: "36px" }}>
                        <Badge badgeContent={product.product_likes} color="primary">
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "white" }} />}
                            id={product._id}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            /*@ts-ignore */
                            checked={
                              product?.me_liked &&
                              product?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Badge>
                      </Button>
                      <Button className="view_btn">
                        <img
                          src="/icons/shopping_cart.svg"
                          alt="shopping imagee"
                          style={{ display: "flex" }}
                        />
                      </Button>
                      <Button
                        className="like_view_btn"
                        style={{ right: "36px" }}>
                        <Badge
                          badgeContent={product.product_views}
                          color="primary">
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "white" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className="dish_desc">
                      <span className="dish_title_text">
                        {product.product_name}
                      </span>
                      <div className="dish_desc_text">
                        <MonetizationOnIcon />
                        {product.product_price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className="review_for_restaurant">
        <Container
          sx={{ mt: "100px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box className="category_title">Oshxona haqidagi fikrlar</Box>
          <Stack
            flexDirection={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            width={"100%"}>
            {Array.from(Array(4).keys()).map((ele, index) => {
              return (
                <Box className="review_box" key={index}>
                  <Box display={"flex"} justifyContent={"center"}>
                    <img
                      src="/community/cute_girl.jpg"
                      alt="cute girl"
                      className="review_img"
                    />
                  </Box>
                  <span className="review_name">Park Jong Min</span>
                  <span className="review_prof">Foydalanuvchi</span>
                  <p className="review_desc">
                    Bu oshxonani barchangizga tavsiya qilaman!
                  </p>
                  <div className="review_stars">
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "#F2BD57" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    <StarIcon style={{ color: "whitesmoke" }} />
                    {/* <Rating
                      name="simple-controlled"
                      value={value}
                      size="large"
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    /> */}
                  </div>
                </Box>
              );
            })}
          </Stack>
        </Container>
      </div>

      <Container className="member_reviews">
        <Box className="category_title">Oshxona Haqida</Box>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          width={"90%"}
          sx={{ mt: "70px" }}>
          <Box
            className="about_left"
            sx={{
              backgroundImage: `url("/restaurant/restaurant-3.jpeg")`
            }}>
            <div className="about_left_desc">
              <span>Fray</span>
              <p>Eng mazali ovqatlar</p>
            </div>
          </Box>
          <Box className="about_right">
            {Array.from(Array(3).keys()).map((ele, index) => {
              return (
                <Box display={"flex"} flexDirection={"row"} key={index}>
                  <div className="about_right_img"></div>
                  <div className="about_right_desc">
                    <span>Bizning moxir oshpazlarimiz</span>
                    <p>Bizning oshpazlarimiz iqtidorli va malakali</p>
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>

        <Stack
          sx={{ mt: "60px" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box className="category_title">Oshxona Manzili</Box>
          <iframe
            style={{ marginTop: "60px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25276.181229505135!2d126.83263500000001!3d37.636914749999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9b5893a4d711%3A0xe4c7a95b456d64ce!2zMTDrhYTtg4DquLDsoJXruYTshLzthLDtmZTsoJXsoJA!5e0!3m2!1sko!2skr!4v1700623111231!5m2!1sko!2skr"
            width={"1320px"}
            height={"450px"}
            referrerPolicy="no-referrer-when-downgrade"
            title="your-unique-title"></iframe>
        </Stack>
      </Container>
    </div>
  );
}
function setChosenRestaurants(data: Restaurant[]): any {
  throw new Error("Function not implemented.");
}

