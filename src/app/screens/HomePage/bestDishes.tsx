import { MonetizationOn } from '@mui/icons-material';
import { Box, Container, Stack } from '@mui/material';
import React from 'react';

export function BestDishes() {
    return (
        <div className='best_dishes_frame'>
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                   <Box className="category_title">Trenddagi Ovqatlar</Box>
                    <Stack sx={{mx: "43px"}} flexDirection={"row"}>
                       <Box className="dish_box">
                          <Stack
                              className='dish_img'
                              sx={{backgroundImage: 'url("/dishes/shashlik 4.jpg")'}}>
                              <div className={'dish_sale'}>normal size</div>
                              <div className={'view_btn'}>
                                Batafsil ko'rish
                                <img
                                  src={'/icons/arrow_right.svg'}
                                  style={{marginLeft: "9px"}} 
                                />
                              </div>
                          </Stack>
                          <Stack className='dish_desc'>
                            <span className='dish_title_text'>Burda Shashlik</span>
                            <span className='dish_desc_text'>
                                <MonetizationOn/>
                                11
                            </span>
                          </Stack>
                       </Box> 

                       <Box className="dish_box">
                          <Stack
                              className='dish_img'
                              sx={{backgroundImage: 'url("/dishes/osh 3.jpg")'}}>
                              <div className={'dish_sale'}>large size</div>
                              <div className={'view_btn'}>
                                Batafsil ko'rish
                                <img
                                  src={'/icons/arrow_right.svg'}
                                  style={{marginLeft: "9px"}} 
                                />
                              </div>
                          </Stack>
                          <Stack className='dish_desc'>
                            <span className='dish_title_text'>Xorazm Oshi</span>
                            <span className='dish_desc_text'>
                                <MonetizationOn/>
                                8
                            </span>
                          </Stack>
                       </Box> 

                       <Box className="dish_box">
                          <Stack
                              className='dish_img'
                              sx={{backgroundImage: 'url("/dishes/somsa 3.jpg")'}}>
                              <div className={'dish_sale'}>big size</div>
                              <div className={'view_btn'}>
                                Batafsil ko'rish
                                <img
                                  src={'/icons/arrow_right.svg'}
                                  style={{marginLeft: "9px"}} 
                                />
                              </div>
                          </Stack>
                          <Stack className='dish_desc'>
                            <span className='dish_title_text'>Parmoda Somsa</span>
                            <span className='dish_desc_text'>
                                <MonetizationOn/>
                                10
                            </span>
                          </Stack>
                       </Box> 

                       <Box className="dish_box">
                          <Stack
                              className='dish_img'
                              sx={{backgroundImage: 'url("/dishes/tabaka 2.jpg")'}}>
                              <div className={'dish_sale'}>small size</div>
                              <div className={'view_btn'}>
                                Batafsil ko'rish
                                <img
                                  src={'/icons/arrow_right.svg'}
                                  style={{marginLeft: "9px"}} 
                                />
                              </div>
                          </Stack>
                          <Stack className='dish_desc'>
                            <span className='dish_title_text'>Tabaka</span>
                            <span className='dish_desc_text'>
                                <MonetizationOn/>
                                9
                            </span>
                          </Stack>
                       </Box> 
                    </Stack> 
                </Stack>
            </Container>
        </div>
    )
}