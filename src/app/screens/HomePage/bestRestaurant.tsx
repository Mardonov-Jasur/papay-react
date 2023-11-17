import { Favorite, Visibility } from '@mui/icons-material';
import { AspectRatio, Card, CardOverflow, CssVarsProvider, IconButton } from '@mui/joy';
import { Box, Button, Container, Stack } from '@mui/material';
import React from 'react';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallIcon from '@mui/icons-material/Call';

export function BestRestaurants() {
    return (
        <div className='best_restaurant_frame'>
            <img src={"icons/line_group.svg"}
              style={{position: "absolute", left:"6%", transform: "rotate(90deg)"}}
            />
            <Container sx={{paddingTop: "153px"}}>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Box className="category_title">Zo'r Restaurantlar</Box>
                    <Stack sx={{mt: "43px"}} flexDirection={"row"}>
                        <CssVarsProvider>
                            <Card
                              variant='outlined'
                              sx={{minHeight: 483, minWidth: 328, mr: "35px"}}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio={"1"}>
                                        <img src="restaurant/restaurant-5.jpg" alt="" />
                                    </AspectRatio>
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
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", nt: 2}}>
                                  Baraka
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.700"
                                    >
                                      Navoiy city, Sarxali  
                                    </Link>
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                      +998 91 264 99 68 
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outineBorder",
                                        bgcolor: "background.level1",
                                    }}
                                >
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex"
                                        }}
                                    >
                                        100{""}
                                        <Visibility sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                    >
                                        <div>500</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>   
                               </CardOverflow>
                            </Card>

                            <Card
                              variant='outlined'
                              sx={{minHeight: 483, minWidth: 328, mr: "35px"}}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio={"1"}>
                                        <img src="restaurant/restaurant-6.jpeg" alt="" />
                                    </AspectRatio>
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
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", nt: 2}}>
                                  Frey
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.700"
                                    >
                                      Buxara city, Amirlar  
                                    </Link>
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                      +998 90 596 95 22
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outineBorder",
                                        bgcolor: "background.level1",
                                    }}
                                >
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex"
                                        }}
                                    >
                                        160{""}
                                        <Visibility sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                    >
                                        <div>350</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>   
                               </CardOverflow>
                            </Card>

                            <Card
                              variant='outlined'
                              sx={{minHeight: 483, minWidth: 328, mr: "35px"}}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio={"1"}>
                                        <img src="restaurant/restaurant-7.jpg" alt="" />
                                    </AspectRatio>
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
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", nt: 2}}>
                                  Halol
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.700"
                                    >
                                      Namangan city, Zarkent   
                                    </Link>
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                      +998 91 365 99 88 
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outineBorder",
                                        bgcolor: "background.level1",
                                    }}
                                >
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex"
                                        }}
                                    >
                                        120{""}
                                        <Visibility sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                    >
                                        <div>260</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>   
                               </CardOverflow>
                            </Card>

                            <Card
                              variant='outlined'
                              sx={{minHeight: 483, minWidth: 328, mr: "35px"}}
                            >
                                <CardOverflow>
                                    <AspectRatio ratio={"1"}>
                                        <img src="restaurant/restaurant-8.jpg" alt="" />
                                    </AspectRatio>
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
                                </CardOverflow>
                                <Typography level="h2" sx={{fontSize: "md", nt: 2}}>
                                  Vodiy
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<LocationOnRoundedIcon />}
                                        textColor="neutral.700"
                                    >
                                      Guliston city, Bahmal  
                                    </Link>
                                </Typography>
                                <Typography level='body-sm' sx={{mt: 0.5, mb: 2}}>
                                    <Link
                                        href=''
                                        startDecorator={<CallIcon />}
                                        textColor="neutral.700"
                                    >
                                      +998 91 632 26 26
                                    </Link>
                                </Typography>
                                <CardOverflow
                                    variant='soft'
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        borderColor: "neutral.outineBorder",
                                        bgcolor: "background.level1",
                                    }}
                                >
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex"
                                        }}
                                    >
                                        140{""}
                                        <Visibility sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>
                                    <Box sx={{width: 2, bgcolor: "divider"}}/>
                                    <Typography
                                       level='body-sm'
                                       sx={{
                                          fontWeight: "md",
                                          color: "text.secondary",
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                    >
                                        <div>150</div>
                                        <Favorite sx={{fontSize: 20, marginLeft: "5px"}}/>
                                    </Typography>   
                               </CardOverflow>
                            </Card>
                        </CssVarsProvider>
                    </Stack>

                    <Stack flexDirection={"row"} justifyContent={"flex-end"} style={{width: "100%", marginTop: "30px"}}>
                        <Button style={{background: "#1976d2", color: "#ffffff"}}>
                            Barchasini Ko'rish            
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}