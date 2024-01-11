import { Favorite, FavoriteBorder, Visibility } from "@mui/icons-material";
import { Box, Checkbox, Link, Stack } from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Typography } from "@mui/joy";
import moment from "moment";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import MemberApiService from "../../apiservices/memberApiService";
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";
import { Definer } from "../../../lib/Definer";
import { verifyMemberData } from "../../apiservices/verify";

const TargetArticles = (props: any) => {
  const { setArticlesRebuild } = props;
  /**HANDLERS */
   const targetLikeHandler = async (e: any) => {
     try {
       assert.ok(verifyMemberData, Definer.auth_err1);
       const memberService = new MemberApiService();
       const id = e.target.id,
         like_result: any = await memberService.memberLikeTarget({
           like_ref_id: id,
           group_type: "community"
         });
       assert.ok(like_result, Definer.general_err1);
       await sweetTopSmallSuccessAlert("success", 700, false);
       props.setArticlesRebuild(new Date());
     } catch (err: any) {
       console.log("targetLikeTop, ERROR", err);
       sweetErrorHandling(err).then();
     }
   };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const image = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/auth/user_3.webp";
        return (
          <Link className="all_article_box" href={`/member-page/other?mb_id=${article.mb_id}&art_id=${article._id}`}>
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
                      marginTop: "-20px",
                      marginBottom: "-20px"
                    }}>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder style={{ fill: "white" }} />}
                      checkedIcon={<Favorite style={{ fill: "red" }} />}
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
          </Link>
        );
      })}
    </Stack>
  );
};

export default TargetArticles;
function setArticlesRebuild(arg0: Date) {
  throw new Error("Function not implemented.");
}

