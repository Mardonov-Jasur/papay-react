import { Box, Button, Container, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CssVarsProvider } from "@mui/joy/styles";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import MemberApiService from "../../apiservices/memberApiService";
import { Definer } from "../../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert
} from "../../../lib/sweetAlert";
import { useHistory } from "react-router-dom";
import RestaurantApiService from "../../apiservices/restaurantApiService";
import { SearchObj } from "../../../types/others";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTargetRestaurants } from "./selector";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import { setTargetRestaurants } from "./slice";
import { verifyMemberData } from "../../apiservices/verify";



/**REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTargetRestaurants: (data: Restaurant[]) =>
    dispach(setTargetRestaurants(data))
});

/**REDUX SELECTOR */
const targetRestaurantsRetriever = createSelector(
  retrieveTargetRestaurants,
  (targetRestaurants) => ({
    targetRestaurants
  })
);

export function AllRestaurants() {
  /**INITIALIZATIONS */
  const history = useHistory();
  const { setTargetRestaurants } = actionDispatch(useDispatch());
  const { targetRestaurants } = useSelector(targetRestaurantsRetriever);
  const [targetSearchObject, setTargetSearchObject] = useState<SearchObj>({
    page: 1,
    limit: 8,
    order: "mb_point"
  });
  const refs: any = useRef([]);

  useEffect(() => {
    //TODO: Retrieve Targetrestaurantdata
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getRestaurants(targetSearchObject)
      .then((data) => setTargetRestaurants(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  /**HANDLERS */
  const chosenRestaurantHandler = (id: string) => {
    history.push(`/restaurant/${id}`)
  }
  const searchHandler = (category: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.order = category;
    setTargetSearchObject({ ...targetSearchObject });
  };
  const handlePaginationChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({...targetSearchObject})
  };

   const targetLikeHandler = async (e: any, id: string) => {
     try {
       assert.ok(verifyMemberData, Definer.auth_err1);

       const memberService = new MemberApiService(),
         like_result: any = await memberService.memberLikeTarget({
           like_ref_id: id,
           group_type: "member"
         });
       assert.ok(like_result, Definer.general_err1);

       if (like_result.like_status > 0) {
         e.target.style.fill = "red";
         refs.current[like_result.like_ref_id].innerHTML++;
       } else {
         e.target.style.fill = "white";
         refs.current[like_result.like_ref_id].innerHTML--;
       }

       await sweetTopSmallSuccessAlert("success", 700, false);
     } catch (err: any) {
       console.log("targetLikeHandler, ERROR:", err);
       sweetErrorHandling(err).then();
     }
   };

  return (
    <div className="all_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="fil_search_box">
            <Box className="fil_box">
              <a onClick={() => searchHandler("mb_point")}>Zo'r</a>
              <a onClick={() => searchHandler("mb_views")}>Mashhur</a>
              <a onClick={() => searchHandler("mb_likes")}>Trenddagi</a>
              <a onClick={() => searchHandler("createdAt")}>Yangi</a>
            </Box>
            <Box className="search_big_box">
              <form className="search_form" action={""} method={""}>
                <input
                  type="search"
                  className="searchInput"
                  name="resSearch"
                  placeholder="Qidiruv"
                />
                <Button
                  className="button_search"
                  variant="contained"
                  endIcon={<SearchIcon />}>
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>

          <Stack className="all_res_box">
            <CssVarsProvider>
              {targetRestaurants.map((ele: Restaurant) => {
                const image_path = `${serverApi}/${ele.mb_image}`;
                return (
                  <Card
                  onClick={() => chosenRestaurantHandler(ele._id)}
                    variant="outlined"
                    sx={{
                      minHeight: 410,
                      minWidth: 290,
                      mx: "17px",
                      my: "20px",
                      cursor: "pointer"
                    }}>
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={image_path} alt="Here Picturee" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,.4)"
                        }}>
                        <Favorite
                          onClick={(e) => targetLikeHandler(e, ele._id)}
                          style={{
                            fill:
                              ele?.me_liked && ele?.me_liked[0]?.my_favorite
                                ? "red"
                                : "white"
                          }}
                        />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      {ele.mb_nick} restaurant
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700">
                        {ele.mb_adress}
                      </Link>
                    </Typography>
                    <Typography level="body-sm" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700">
                        {ele.mb_phone}
                      </Link>
                    </Typography>
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlinedBorder",
                        bgcolor: "background.level1"
                      }}>
                      <Typography
                        level="body-sm"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex"
                        }}>
                        {ele.mb_views}
                        <VisibilityIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        level="body-sm"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex"
                        }}>
                        <div ref={(element) => (refs.current[ele._id] = element)}>
                          {ele.mb_likes}</div>
                        <FavoriteIcon
                          sx={{ fontSize: 20, marginLeft: "5px" }}
                        />
                      </Typography>
                    </CardOverflow>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>

          <Stack className="bottom_box">
            <img
              className="line_img"
              src="/icons/line_group.svg"
              style={{ transform: "rotate(-90deg)" }}
              alt="Restaurant Page"
            />
            <Pagination
              count={
                targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3
              }
              page={targetSearchObject.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={handlePaginationChange}
            />
            <img
              className="line_img_two"
              src="/icons/line_group_two.svg"
              alt="Restaurant Page"
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
