import { Favorite, FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/joy";
import moment from "moment";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";

const TargetArticles = (props: any) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const image = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/auth/user_3.webp";
        return (
          <Link className="all_article_box" href={``}>
            <Box className="all_article_img">
              <img src={image} alt="" />
            </Box>
            <Box className="all_article_container">
              <Box className="user_prof">
                <img src="/icons/user_icon.svg" alt="" />
                <span>{article?.member_data.mb_nick}</span>
              </Box>
              <Box className="evaluation">
                <span>{article?.bo_id}</span>
                <span style={{ fontSize: "17px" }}>{article?.art_subject}</span>
              </Box>
              <Box
                style={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  marginLeft: "350px",
                  marginTop: "18px"
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
                  {article.art_likes}{""}
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
                  <div>{article.art_views}</div>
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
