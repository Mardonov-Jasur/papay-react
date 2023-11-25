import React from "react";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
// import "swiper/css/thumbs";
import Checkbox from "@mui/material/Checkbox";

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Marginer from "../../components/marginer";

const chosen_list = Array.from(Array(5).keys());
const img_path = `/restaurant/restaurant-6.jpeg`;

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="dish_swiper"
            loop={false}
            spaceBetween={15}
            navigation={true}
            slidesPerView={1}
            modules={[FreeMode, Navigation, Thumbs]}>
            {chosen_list.map((ele) => {
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={img_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            className="dish_swiper_2"
            slidesPerView="auto"
            loop
            centeredSlides={true}
            spaceBetween={15}
            // navigation= {true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true
            }}>
            {chosen_list.map((ele, index) => {
              return (
                <SwiperSlide className="dish_slider">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={img_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen_dish_info_container">
          <Box className="chosen_dish_info_box">
            <strong className="dish_name">Baraka Restaurant</strong>
            <span className="chef_name">King of foods</span>
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
                    checked={true}
                  />

                  <span>90+</span>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RemoveRedEyeIcon
                    style={{ color: "#979797" }}
                    sx={{ mr: "7px" }}
                  />
                  <span>700+</span>
                </div>
              </div>
            </Box>
            <p>
              Baraka Restaurantida Siz Eng Mazali Milliy Taomlarni Tatib Ko'rishingiz Mumkin
            </p>
            <Marginer
              direction="horizontal"
              height="1.5"
              width="100%"
              bg="#000000"
            />
            <div className="dish_price">
              <span>Narxi:</span>
              <span>$ 8</span>
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
