import {
  Box,
  Container,
  Stack,
  Tab,
  Pagination,
  PaginationItem,
  Button
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TabPanel } from "@mui/lab";
import { Facebook, Instagram, Telegram, YouTube } from "@mui/icons-material";
import MemberPosts from "./memberPosts";
import MemberFollowers from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
// import TViewer from "./TViewer";

const VisitOtherPage = () => {
  // Initializations
  const [value, setValue] = useState("1");

  // Handler
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  const handlePagination = (event: ChangeEvent<unknown>, page: number) => {};

  return (
    <div className="my_page">
      <Container className="my_page_container">
        <TabContext value={value}>
          <Stack className="my_page_frame">
            <Stack className="my_page_left">
              <Box className="box_left">
                <TabPanel value="1">
                  <Box className="menu_name"> Maqolalar</Box>
                  <Box className="menu_content">
                    <MemberPosts />
                    <Stack className="pagination">
                      <Box className="bottom_box">
                        <Pagination
                          count={3}
                          page={1}
                          renderItem={(item) => (
                            <PaginationItem
                              components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon
                              }}
                              {...item}
                              color="secondary"
                            />
                          )}
                          onChange={handlePagination}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <Box className="menu_name">Followers</Box>
                  <Box className="menu_content">
                    <MemberFollowers actions_enabled={false} />
                  </Box>
                </TabPanel>
                <TabPanel value="3">
                  <Box className="menu_name">Following</Box>
                  <Box className="menu_content">
                    <MemberFollowings actions_enabled={false} />
                  </Box>
                </TabPanel>

              </Box>
            </Stack>
            <Stack className="my_page_right">
              <Box className="order_info_box">
                <Box className="info_box_item">
                  <div className="order_user_img">
                    <img src="/community/moto1.jpg" alt="" />
                    <img className="svg" src="/icons/user_icon.svg" alt="" />
                  </div>
                  <div className="order_user_info">
                    <span className="name">Joseph</span>
                    <span className="user_prof">Foydalanuvchi</span>
                  </div>
                </Box>
                <Box className="user_media_box">
                  <Facebook />
                  <Instagram />
                  <Telegram />
                  <YouTube />
                </Box>
                <Box className="user_media_box">
                  <p>Followers: 2</p>
                  <p>Followings: 2</p>
                </Box>
                <p className="user_media_box">Salom Mening Ismim Joseph</p>
                <Box className="maqola_yoz_sec">
                  <TabList
                    onChange={handleChange}
                    aria-labelledby="simple-tabpanel-label">
                    {value === "1" || value === "4" ? (
                      <Tab
                        value={"1"}
                        component={() => (
                          <Button
                            variant="contained"
                            className="btn_follow"
                            onClick={() => setValue("1")}>
                            Follow Qilish
                          </Button>
                        )}
                      />
                    ) : (
                      <Tab
                        value={"1"}
                        component={() => (
                          <Button
                            variant="contained"
                            className="btn_cancel"
                            onClick={() => setValue("1")}>
                            Bekor Qilish
                          </Button>
                        )}
                      />
                    )}
                  </TabList>
                </Box>
              </Box>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  className="my_page_menu">
                  <Tab
                    value={"1"}
                    component={() => (
                      <div className="menu_box" onClick={() => setValue("1")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.5406 3.86143C17.1266 3.27558 17.9213 2.94647 18.75 2.94647C19.5786 2.94647 20.3733 3.27558 20.9593 3.86143L21.1385 4.0406C21.7244 4.62662 22.0535 5.42133 22.0535 6.24997C22.0535 7.07861 21.7244 7.87332 21.1385 8.45935L19.3291 10.2708L9.06976 20.5291C8.93642 20.6625 8.76936 20.7572 8.58642 20.8031L4.41976 21.8448C4.24519 21.8885 4.06227 21.8862 3.88883 21.8382C3.71539 21.7902 3.55735 21.6981 3.4301 21.5709C3.30285 21.4436 3.21073 21.2856 3.16274 21.1121C3.11474 20.9387 3.11249 20.7558 3.15621 20.5812L4.19788 16.4146C4.24376 16.2316 4.33845 16.0646 4.47184 15.9312L14.7906 5.61247L16.5406 3.86247V3.86143ZM19.4864 5.33435C19.2911 5.13906 19.0262 5.02936 18.75 5.02936C18.4738 5.02936 18.2088 5.13906 18.0135 5.33435L16.9864 6.36143L18.6062 8.0458L19.6656 6.98643C19.8609 6.79109 19.9706 6.52618 19.9706 6.24997C19.9706 5.97376 19.8609 5.70885 19.6656 5.51351L19.4864 5.33435ZM17.1323 9.51872L15.5125 7.83539L6.14892 17.2L5.59788 19.4021L7.80101 18.851L17.1333 9.51872H17.1323Z"
                            fill="#201F25"
                          />
                        </svg>
                        <span>Maqolalari</span>
                      </div>
                    )}
                  />
                  <Tab
                    value={"2"}
                    component={() => (
                      <div className="menu_box" onClick={() => setValue("2")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="25"
                          viewBox="0 0 28 25"
                          fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.7268 5.21336C17.898 5.21336 17.1031 5.5426 16.5171 6.12865C15.931 6.7147 15.6018 7.50955 15.6018 8.33836C15.6018 9.16716 15.931 9.96201 16.5171 10.5481C17.1031 11.1341 17.898 11.4634 18.7268 11.4634C19.5556 11.4634 20.3505 11.1341 20.9365 10.5481C21.5226 9.96201 21.8518 9.16716 21.8518 8.33836C21.8518 7.50955 21.5226 6.7147 20.9365 6.12865C20.3505 5.5426 19.5556 5.21336 18.7268 5.21336ZM13.5185 8.33836C13.5185 7.48935 13.726 6.65322 14.1231 5.90277C14.5201 5.15232 15.0946 4.51031 15.7964 4.03263C16.4983 3.55496 17.3063 3.2561 18.1501 3.16209C18.9939 3.06809 19.8479 3.18177 20.6377 3.49326C21.4275 3.80474 22.1291 4.30458 22.6816 4.94924C23.2341 5.59391 23.6205 6.36385 23.8074 7.19204C23.9943 8.02022 23.9759 8.88153 23.7537 9.70096C23.5316 10.5204 23.1126 11.2731 22.5331 11.8936C24.3002 12.4684 25.828 13.611 26.8789 15.1436C27.0255 15.3719 27.0772 15.6484 27.0231 15.9142C26.9689 16.1801 26.8132 16.4143 26.589 16.5671C26.3648 16.7199 26.0899 16.7792 25.8226 16.7324C25.5554 16.6856 25.317 16.5364 25.1581 16.3165C24.1414 14.8248 22.2872 13.5467 19.7685 13.5467C15.7747 13.5467 13.5185 16.7488 13.5185 18.755C13.5185 19.0313 13.4087 19.2962 13.2134 19.4916C13.018 19.6869 12.7531 19.7967 12.4768 19.7967C12.2005 19.7967 11.9356 19.6869 11.7402 19.4916C11.5449 19.2962 11.4351 19.0313 11.4351 18.755C11.4351 18.0342 11.5997 17.2654 11.9143 16.5081C11.8325 16.4552 11.7585 16.391 11.6945 16.3175C10.8393 15.3446 9.51222 14.5884 7.78931 14.5884C6.06639 14.5884 4.73931 15.3446 3.8841 16.3175C3.69892 16.5142 3.44457 16.6313 3.17471 16.644C2.90486 16.6567 2.64062 16.5641 2.43776 16.3857C2.23489 16.2073 2.10927 15.9571 2.0874 15.6878C2.06554 15.4185 2.14914 15.1513 2.32056 14.9425C2.93568 14.2424 3.68158 13.6692 4.51639 13.255C3.84942 12.6041 3.39162 11.7691 3.20146 10.8568C3.0113 9.94442 3.09743 8.99609 3.44882 8.13292C3.80022 7.26974 4.40094 6.53091 5.17426 6.01078C5.94758 5.49065 6.85839 5.21285 7.79035 5.21285C8.72231 5.21285 9.63312 5.49065 10.4064 6.01078C11.1798 6.53091 11.7805 7.26974 12.1319 8.13292C12.4833 8.99609 12.5694 9.94442 12.3792 10.8568C12.1891 11.7691 11.7313 12.6041 11.0643 13.255C11.787 13.6137 12.4438 14.092 13.007 14.6696C13.7145 13.7794 14.5946 13.0413 15.5945 12.4998C14.9492 12.0149 14.4257 11.3864 14.0654 10.6641C13.705 9.94181 13.5178 9.14554 13.5185 8.33836ZM5.18514 9.90086C5.18514 9.21019 5.45951 8.54781 5.94788 8.05943C6.43626 7.57106 7.09864 7.29669 7.78931 7.29669C8.47997 7.29669 9.14235 7.57106 9.63073 8.05943C10.1191 8.54781 10.3935 9.21019 10.3935 9.90086C10.3935 10.5915 10.1191 11.2539 9.63073 11.7423C9.14235 12.2307 8.47997 12.505 7.78931 12.505C7.09864 12.505 6.43626 12.2307 5.94788 11.7423C5.45951 11.2539 5.18514 10.5915 5.18514 9.90086Z"
                            fill="#201F25"
                          />
                        </svg>
                        <span>Follower</span>
                      </div>
                    )}
                  />
                  <Tab
                    value={"3"}
                    component={() => (
                      <div className="menu_box" onClick={() => setValue("3")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.33333 9.375C8.33333 8.26993 8.77232 7.21012 9.55372 6.42872C10.3351 5.64732 11.3949 5.20833 12.5 5.20833C13.6051 5.20833 14.6649 5.64732 15.4463 6.42872C16.2277 7.21012 16.6667 8.26993 16.6667 9.375C16.6667 10.4801 16.2277 11.5399 15.4463 12.3213C14.6649 13.1027 13.6051 13.5417 12.5 13.5417C11.3949 13.5417 10.3351 13.1027 9.55372 12.3213C8.77232 11.5399 8.33333 10.4801 8.33333 9.375ZM16.4833 14.1906C17.4745 13.3707 18.1885 12.2649 18.528 11.0241C18.8674 9.78337 18.8157 8.4681 18.38 7.25779C17.9443 6.04749 17.1457 5.00111 16.0933 4.26145C15.0408 3.52179 13.7858 3.12488 12.4995 3.12488C11.2131 3.12488 9.95811 3.52179 8.90568 4.26145C7.85326 5.00111 7.05469 6.04749 6.61896 7.25779C6.18323 8.4681 6.13156 9.78337 6.47101 11.0241C6.81045 12.2649 7.52447 13.3707 8.51562 14.1906C5.19375 15.3604 3.125 17.9656 3.125 20.8333C3.125 21.1096 3.23475 21.3746 3.4301 21.5699C3.62545 21.7653 3.8904 21.875 4.16667 21.875C4.44293 21.875 4.70789 21.7653 4.90324 21.5699C5.09859 21.3746 5.20833 21.1096 5.20833 20.8333C5.20833 18.4687 7.66146 15.625 12.5 15.625C17.3385 15.625 19.7917 18.4687 19.7917 20.8333C19.7917 21.1096 19.9014 21.3746 20.0968 21.5699C20.2921 21.7653 20.5571 21.875 20.8333 21.875C21.1096 21.875 21.3746 21.7653 21.5699 21.5699C21.7653 21.3746 21.875 21.1096 21.875 20.8333C21.875 17.9656 19.8083 15.3604 16.4833 14.1906Z"
                            fill="#201F25"
                          />
                        </svg>
                        <span>Following</span>
                      </div>
                    )}
                  />
                </TabList>
              </Box>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
};

export default VisitOtherPage;
