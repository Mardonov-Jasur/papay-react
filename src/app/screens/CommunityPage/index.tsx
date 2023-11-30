import {
  Box,
  Container,
  Stack,
  Tab,
  Pagination,
  PaginationItem
} from "@mui/material";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommunityChats from "./communityChats";
import { TabPanel } from "@mui/lab";
import TargetArticles from "./targetAritcles";
// import TargetArticles from "./targetArticles";

const targetBoArticles = [1, 2, 3];

export function CommunityPage(props: any) {
  // Initializations
  const [value, setValue] = useState("1");

  // Handler
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlePagination = (event: ChangeEvent<unknown>, page: number) => {};

  return (
    <div className="community_page">
      <div className="community_frame">
        <Container className="community_container">
          <Stack className="community_stack">
            <CommunityChats />
            <Stack className="community_all_frame" inputMode={"text"}>
              <TabContext value={value}>
                <Box className="article_tabs">
                  <Box className="community_table">
                    <TabList
                      onChange={handleChange}
                      aria-label="basic tabs example">
                      <Tab label="Barcha Maqolalar" value={"1"} />
                      <Tab label="Mashxurlar" value={"2"} />
                      <Tab label="Oshxonaga baho" value={"3"} />
                      <Tab label="Hikoyalar" value={"4"} />
                    </TabList>
                  </Box>
                </Box>
                <Stack className="article_main">
                  <TabPanel value="1">
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value="2">
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles targetBoArticles={targetBoArticles} />
                  </TabPanel>
                </Stack>
                <Box className="article_bott">
                  <Pagination
                    count={5}
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
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
