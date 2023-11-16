import { Box, Container, Stack } from '@mui/material';
import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CardOverflow, CssVarsProvider, IconButton } from '@mui/joy';
import { Favorite } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';


export function TopRestaurant() {
    return (
        <div className="top_restaurant_frame">
            <Container>
                <Stack 
                  flexDirection={'column'} 
                  alignItems={'center'} 
                  sx={{mt: '45px'}}
                >
                    <Box className='category_title'>TOP Restaurantlar</Box>
                    <Stack sx={{mt:'43px'}} flexDirection={'row'} m={'16px'} >
                       <CssVarsProvider>
                        <Card 
                          sx={{
                            minHeight: '430px',
                            minWidth: 325,
                            mr: "35px",
                            cursor: "pointer",
                           }}
                        >
                          <CardCover>
                            <img
                              src="/restaurant/restaurant-1.jpeg" loading="lazy" alt=""/>
                          </CardCover>
                          <CardCover
                            sx={{
                              background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                          />
                          <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize={"lg"} textColor="#fff" mb={1}>
                              Texas De Brazil
                            </Typography>
                            <Typography
                              startDecorator={<LocationOnRoundedIcon />}
                              textColor="neutral.300"
                            >
                              Ferghana city, Navoiy
                            </Typography>
                          </CardContent>
                          <CardOverflow 
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                borderTop: "1px solid"
                            }}>
                                <IconButton
                                  aria-label='Like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                  sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    right: "1rem",
                                    bottom: 45,
                                    transform: "translateY(50%)",
                                    color: "rga(0,0,0,.4)"
                                  }}
                                >
                                    <Favorite style={{fill: "white"}}/>
                                </IconButton>
                                <Typography
                                  level='body-sm'
                                  sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex"
                                  }}>
                                    100{""}
                                    <VisibilityIcon sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>
                                 <Box sx={{width: 2, bgcolor: "divider"}}/>
                                <Typography
                                   sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex",
                                   }}>
                                    <div>50</div>
                                    <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>   
                                   
                               
                          </CardOverflow>
                       </Card>

                       <Card 
                          sx={{
                            minHeight: '430px',
                            minWidth: 325,
                            mr: "35px",
                            cursor: "pointer",
                           }}
                        >
                          <CardCover>
                            <img
                              src="/restaurant/restaurant-2.jpeg" loading="lazy" alt=""/>
                          </CardCover>
                          <CardCover
                            sx={{
                              background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                          />
                          <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize={"lg"} textColor="#fff" mb={1}>
                              Koryo
                            </Typography>
                            <Typography
                              startDecorator={<LocationOnRoundedIcon />}
                              textColor="neutral.300"
                            >
                              Tashkent city, Chilanzar
                            </Typography>
                          </CardContent>
                          <CardOverflow 
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                borderTop: "1px solid"
                            }}>
                                <IconButton
                                  aria-label='Like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                  sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    right: "1rem",
                                    bottom: 45,
                                    transform: "translateY(50%)",
                                    color: "rga(0,0,0,.4)"
                                  }}
                                >
                                    <Favorite style={{fill: "white"}}/>
                                </IconButton>
                                <Typography
                                  level='body-sm'
                                  sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex"
                                  }}>
                                    150{""}
                                    <VisibilityIcon sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>
                                 <Box sx={{width: 2, bgcolor: "divider"}}/>
                                <Typography
                                   sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex",
                                   }}>
                                    <div>70</div>
                                    <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>   
                                   
                               
                          </CardOverflow>
                       </Card>

                       <Card 
                          sx={{
                            minHeight: '430px',
                            minWidth: 325,
                            mr: "35px",
                            cursor: "pointer",
                           }}
                        >
                          <CardCover>
                            <img
                              src="/restaurant/restaurant-3.jpeg" loading="lazy" alt=""/>
                          </CardCover>
                          <CardCover
                            sx={{
                              background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                          />
                          <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize={"lg"} textColor="#fff" mb={1}>
                              Dene
                            </Typography>
                            <Typography
                              startDecorator={<LocationOnRoundedIcon />}
                              textColor="neutral.300"
                            >
                              Samarqand city, Registon
                            </Typography>
                          </CardContent>
                          <CardOverflow 
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                borderTop: "1px solid"
                            }}>
                                <IconButton
                                  aria-label='Like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                  sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    right: "1rem",
                                    bottom: 45,
                                    transform: "translateY(50%)",
                                    color: "rga(0,0,0,.4)"
                                  }}
                                >
                                    <Favorite style={{fill: "white"}}/>
                                </IconButton>
                                <Typography
                                  level='body-sm'
                                  sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex"
                                  }}>
                                    140{""}
                                    <VisibilityIcon sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>
                                 <Box sx={{width: 2, bgcolor: "divider"}}/>
                                <Typography
                                   sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex",
                                   }}>
                                    <div>90</div>
                                    <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>   
                                   
                               
                          </CardOverflow>
                       </Card>

                       <Card 
                          sx={{
                            minHeight: '430px',
                            minWidth: 325,
                            mr: "35px",
                            cursor: "pointer",
                           }}
                        >
                          <CardCover>
                            <img
                              src="/restaurant/restaurant-4.jpeg" loading="lazy" alt=""/>
                          </CardCover>
                          <CardCover
                            sx={{
                              background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                            }}
                          />
                          <CardContent sx={{ justifyContent: 'flex-end' }}>
                            <Typography level="h2" fontSize={"lg"} textColor="#fff" mb={1}>
                              Kipr
                            </Typography>
                            <Typography
                              startDecorator={<LocationOnRoundedIcon />}
                              textColor="neutral.300"
                            >
                              Andijan city, Axshak
                            </Typography>
                          </CardContent>
                          <CardOverflow 
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 1.5,
                                py: 1.5,
                                px: "var(--Card-padding)",
                                borderTop: "1px solid"
                            }}>
                                <IconButton
                                  aria-label='Like minimal photography'
                                  size='md'
                                  variant='solid'
                                  color='neutral'
                                  sx={{
                                    position: "absolute",
                                    zIndex: 2,
                                    borderRadius: "50%",
                                    right: "1rem",
                                    bottom: 45,
                                    transform: "translateY(50%)",
                                    color: "rga(0,0,0,.4)"
                                  }}
                                >
                                    <Favorite style={{fill: "white"}}/>
                                </IconButton>
                                <Typography
                                  level='body-sm'
                                  sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex"
                                  }}>
                                    120{""}
                                    <VisibilityIcon sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>
                                 <Box sx={{width: 2, bgcolor: "divider"}}/>
                                <Typography
                                   sx={{
                                    fontWeight: "md",
                                    color: "neutral.300",
                                    alignItems: "center",
                                    display: "flex",
                                   }}>
                                    <div>45</div>
                                    <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                </Typography>   
                                   
                               
                          </CardOverflow>
                       </Card>
                      </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}

