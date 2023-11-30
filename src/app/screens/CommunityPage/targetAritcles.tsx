import { Favorite, FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/joy";
import moment from "moment";

const TargetArticles = (props: any) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: number) => {
        const image = "/community/sheeran.jpg";
        return (
          <Link className="all_article_box" href={``}>
            <Box className="all_article_img">
              <img src={image} alt="" />
            </Box>
            <Box className="all_article_container">
              <Box className="user_prof">
                <img src="/icons/user_icon.svg" alt="" />
                <span>Sheeran</span>
              </Box>
              <Box className="evaluation">
                <span style={{fontSize: "30px"}}>Frey restaurant</span>
              </Box>
              <Box
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  marginLeft: "300px",
                  marginTop: "30px"
                }}>
                <span style={{ color: "white" }}>
                  {moment().format("YY-MM-DD HH:mm")}
                </span>
                <Typography
                  level="body-sm"
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    alignItems: "center",
                    display: "flex"
                  }}>
                  100{""}
                  <Visibility
                    sx={{ fontSize: 20, marginLeft: "5px", color: "white" }}
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
                  <div>500</div>
                  <Favorite
                    sx={{ fontSize: 20, marginLeft: "5px", color: "white" }}
                  />
                </Typography>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default TargetArticles;
