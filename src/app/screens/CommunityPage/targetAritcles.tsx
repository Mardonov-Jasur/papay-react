import React from "react";
import { Box, Link, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";
import { Visibility } from "@mui/icons-material";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/auth/default_user.svg";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={``}>
            <Box
              className={"all_article_img"}
              alignItems={"center"}
              display={"flex"}>
              <img src={"/community/statham.jpg"} />
            </Box>
            <Box className={"all_article_container"}>
              <Box className="statham">
                <img src={art_image_url} alt="" />
                <span>Statham</span>
              </Box>

              <Box className="evaluation">
                {/* <span style={{ color: "yellow"}}>evaluation</span> */}
                <p>Kipr Tandir Go'sht</p>
              </Box>
            </Box>

            <Stack className="favorite">
                <Box sx={{color: "grey"}}>{moment().format("YY.MM.DD HH:mm")}</Box>
              <Typography
                level="body-sm"
                sx={{
                  fontWeight: "md",
                  color: "text.secondary",
                  alignItems: "center",
                  display: "flex",
                  marginRight: "20px",
                  marginLeft: "20px"
                }}>
                14{""}
                <Visibility sx={{ fontSize: 20, marginLeft: "5px", color: "white" }} />
              </Typography>
              <Typography
                level="body-sm"
                sx={{
                  fontWeight: "md",
                  color: "text.secondary",
                  alignItems: "center",
                  display: "flex"
                }}>
                <div>5</div>
                <Favorite sx={{ fontSize: 20, marginLeft: "5px", color: "red" }} />
              </Typography>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
}
