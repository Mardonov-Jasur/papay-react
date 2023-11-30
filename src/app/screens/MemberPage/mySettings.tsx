import { CloudDownload } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React from "react";

const MySettings = (prop: any) => {
  return (
    <Stack className="my_settings_page">
      <Box className="member_media_frame">
        <img src="/icons/user_icon.svg" alt="" />
        <Box className="media_change_box">
          <span>Rasm Yuklash</span>
          <p>JPG, JPEG, PNG rasmlarni yuklay olasiz!</p>
          <Button component="label" className="download">
            <CloudDownload />
            <input type="file" hidden />
          </Button>
        </Box>
      </Box>
      <Box className="name_input">
        <label htmlFor="">Ism</label>
        <input type="text" placeholder={"Statham"} name="mb_nick" />
      </Box>
      <Box className="info_input">
        <Box className="phone_input">
          <label htmlFor="">Telefon raqam</label>
          <input type="text" placeholder={"+821040425681"} name="mb_phone" />
        </Box>
        <Box className="address_input">
          <label htmlFor="">Address</label>
          <input type="text" placeholder={"Suwon"} name="mb_address" />
        </Box>
      </Box>
      <Box className="add_info">
        <label htmlFor="">Malumot</label>
        <textarea
          cols={30}
          name="mb_description"
          id=""
          placeholder="Salom, Men Papays Developerlar uyushmasiman"></textarea>
      </Box>
      <Box className="save_btn">
        <Button variant="contained" color="primary">
          Saqlash
        </Button>
      </Box>
    </Stack>
  );
};

export default MySettings;
