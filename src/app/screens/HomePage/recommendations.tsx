import { Avatar, Box, Stack, Container } from "@mui/material";
import React from "react";


export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}>
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}>
          <Box className="category_title">Tavsiya Qilingan Maqolalar</Box>
          <Stack className="article_main" flexDirection={"row"}>
            <Stack className="article_container">
              <Box className="article_category">Ko'p Ko'rilgan</Box>

              <Stack className={"article_box"}>
                <Box className="article_img"></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Rayan</span>
                    </div>
                    <span className="article_title">
                      Eng foydali va mazali taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage:
                      "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delicious.com.au%2Frecipes%2Fcollections%2Fgallery%2Fpub-favourites-36-classic-recipes-to-keep-dinner-easy%2Fg9uow0m1&psig=AOvVaw29Yyhwyewn2KNyYfzGAj-d&ust=1700552638127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDS7bOK0oIDFQAAAAAdAAAAABAD)",
                  }}></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Borna</span>
                    </div>
                    <span className="article_title">
                      Eng foydali va mazali taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Box className="article_category" sx={{ marginTop: "10px" }}>
                Ko'p Yoqtirilgan
              </Box>

              <Stack className={"article_box"}>
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage:
                      "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delicious.com.au%2Frecipes%2Fcollections%2Fgallery%2Fpub-favourites-36-classic-recipes-to-keep-dinner-easy%2Fg9uow0m1&psig=AOvVaw29Yyhwyewn2KNyYfzGAj-d&ust=1700552638127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDS7bOK0oIDFQAAAAAdAAAAABAD)",
                  }}></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Borna</span>
                    </div>
                    <span className="article_title">
                      Enf foydali va mazali taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>

              <Stack className={"article_box"}>
                <Box
                  className="article_img"
                  sx={{
                    backgroundImage:
                      "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delicious.com.au%2Frecipes%2Fcollections%2Fgallery%2Fpub-favourites-36-classic-recipes-to-keep-dinner-easy%2Fg9uow0m1&psig=AOvVaw29Yyhwyewn2KNyYfzGAj-d&ust=1700552638127000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDS7bOK0oIDFQAAAAAdAAAAABAD)",
                  }}></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt="Author_photo"
                        src="/auth/default_user.svg"
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Borna</span>
                    </div>
                    <span className="article_title">
                      Enf foydali va mazali taomlar
                    </span>
                    <p className="article_desc"></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>

            <Stack className="article_container">
              <Box className="article_category">Mashhurlar</Box>
              <Box className="article_news">
                <h1>TWiewer</h1>
                <Box>
                  <img src="" alt="" />
                </Box>
              </Box>
              <Box className="article_news">
                <h1>TWiewer</h1>
                <Box>
                  <img src="" alt="" />
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
