import { Favorite, FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";
import { Typography } from "@mui/joy";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiservices/memberApiService";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

const MemberPosts = (props: any) => {
  const {
    chosenMemberBoArticles,
    renderChosenArticleHandler,
    setArticlesRebuild
  } = props;
  /**HANDLLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiService();
      const id = e.target.id,
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "community"
        });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setArticlesRebuild(new Date());
    } catch (err: any) {
      console.log("targetLikeTop, ERROR", err);
      sweetErrorHandling(err).then();
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Stack className="post_content">
      {chosenMemberBoArticles.map((article: BoArticle) => {
        const image_path = article.art_image
          ? `${serverApi}/${article.art_image}`
          : "/community/default_art.jpeg";
        return (
          <Link
            className="all_article_box"
            style={{ height: "180px", cursor: "pointer" }}
            onClick= {() => renderChosenArticleHandler(article?._id)}>
            <Box className="all_article_img" style={{ height: "180px" }}>
              <img src={image_path} alt="" />
            </Box>
            <Box className="all_article_container">
              <Box className="user_prof">
                <img
                  src={
                    article?.member_data.mb_image
                      ? `${serverApi}/${article.member_data.mb_image}`
                      : "/icons/user_icon.svg"
                  }
                  alt=""
                />
                <span>{article.member_data.mb_nick}</span>
              </Box>
              <Box className="evaluation">
                <span style={{ fontSize: "25px" }}>{article.bo_id}</span>
                <span style={{ fontSize: "17px", color: "white" }}>
                  {article.art_subject}
                </span>
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
                <span style={{ color: "white", marginTop: "-15px" }}>
                  {moment(article?.createdAt).format("YY-MM-DD HH:mm")}
                </span>
                <Box
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "150px",
                    marginTop: "-15px",
                    gap: "5px"
                  }}>
                  <Typography
                    level="body-sm"
                    sx={{
                      fontWeight: "md",
                      color: "text.secondary",
                      alignItems: "center",
                      display: "flex",
                      marginLeft: "10px"
                    }}>
                    <div>{article.art_views}</div>

                    {""}
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
                    {article.art_likes}
                    <div
                      style={{
                        marginTop: "-30px",
                        marginBottom: "-30px"
                      }}>
                      <Checkbox
                        {...label}
                        icon={<Favorite style={{ color: "grey" }} />}
                        checkedIcon={
                          <FavoriteBorder style={{ color: "red" }} />
                        }
                        id={article?._id}
                        onClick={targetLikeHandler}
                        checked={
                          article?.me_liked && article?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      />
                    </div>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
};

export default MemberPosts;
