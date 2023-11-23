import { Navigation } from "@mui/icons-material";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { FreeMode, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const chosen_list = Array.from(Array(3).keys());

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Chekcbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider">
          <Swiper
            className="chosen_swiper"
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}>
            {chosen_list.map((ele) => {
              const image_path = `/restaurant/food-2.jpg`;
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={image_path}
                    alt="Imagehere"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>

        <Stack className="chosen_dish_info_container">
            <Box className="chosen_dish_info_box">
                <strong className="dish_txt">Sweet Sandvich</strong>
                <span className="resto_name">Texas De Brazil</span>
                <Box className="rating_box"></Box>
            </Box>
        </Stack>
      </Container>
    </div>
  );
}
