import { CloudDownload } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { verifyMemberData } from "../../apiservices/verify";
import { MemberUpdateData } from "../../../types/user";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert
} from "../../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiservices/memberApiService";

const MySettings = (prop: any) => {
  /**INITIALIZATIONS */
  const [file, setFile] = useState(verifyMemberData?.mb_image);

  const [memberUpdate, setMemberUpdate] = useState<MemberUpdateData>({
    mb_nick: "",
    mb_phone: "",
    mb_address: "",
    mb_description: "",
    mb_image: ""
  });
  /**HANDLERS */
  const changeMemberNickHandler = (e: any) => {
    memberUpdate.mb_nick = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberPhoneHandler = (e: any) => {
    memberUpdate.mb_phone = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberAddressHandler = (e: any) => {
    memberUpdate.mb_address = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };
  const changeMemberDescriptionHandler = (e: any) => {
    memberUpdate.mb_description = e.target.value;
    setMemberUpdate({ ...memberUpdate });
  };

  const handleImagePreviewer = (e: any) => {
    try {
      console.log(e.target.files);
      const file = e.target.files[0];

      const fileTypes = file["type"],
        validTypes = ["image/jpg", "image/jpeg", "image/png"];
      assert.ok(validTypes.includes(fileTypes) && file, Definer.input_err2);

      memberUpdate.mb_image = file;
      setMemberUpdate({ ...memberUpdate });
      setFile(URL.createObjectURL(file));
    } catch (err) {
      console.log(`ERROR::: handleImagePreviewer ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  const handleSubmitButton = async () => {
    try {

      const memberService = new MemberApiService();
      const result = await memberService.updateMemberData(memberUpdate);

      assert.ok(result, Definer.general_err1);
      await sweetTopSmallSuccessAlert(
        "Information modified successfully",
        700,
        false
      );
      window.location.reload();
    } catch (err) {
      console.log(`ERROR::: handleSubmitButton ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <Stack className="my_settings_page">
      <Box className="member_media_frame">
        <img src={file} alt="" />
        <Box className="media_change_box" style={{ height: "120px" }}>
          <span>Rasm Yuklash</span>
          <p>JPG, JPEG, PNG formatidagi rasmlarni yuklay olasiz!</p>
          <Button
            component="label"
            className="download"
            onChange={handleImagePreviewer}>
            <CloudDownload />
            <input type="file" hidden />
          </Button>
        </Box>
      </Box>
      <Box className="name_input">
        <label htmlFor="">Ism</label>
        <input
          type="text"
          placeholder={verifyMemberData?.mb_nick}
          onChange={changeMemberNickHandler}
          name="mb_nick"
        />
      </Box>
      <Box className="info_input">
        <Box className="phone_input">
          <label htmlFor="">Telefon raqam</label>
          <input
            type="text"
            placeholder={verifyMemberData?.mb_phone}
            onChange={changeMemberPhoneHandler}
            name="mb_phone"
          />
        </Box>
        <Box className="address_input">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder={verifyMemberData?.mb_address ?? "Manzil kiritilmagan"}
            onChange={changeMemberAddressHandler}
            name="mb_address"
          />
        </Box>
      </Box>
      <Box className="add_info">
        <label htmlFor="">Malumot</label>
        <textarea
          cols={30}
          name="mb_description"
          id=""
          placeholder={
            verifyMemberData.mb_description ?? "Ma'lumot kiritilmagan"
          }
          onChange={changeMemberDescriptionHandler}></textarea>
      </Box>
      <Box className="save_btn">
        <Button variant="contained" color="primary" onClick={handleSubmitButton}>
          Saqlash
        </Button>
      </Box>
    </Stack>
  );
};

export default MySettings;
