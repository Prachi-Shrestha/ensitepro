import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Avatar, Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import article from '../../img/Frame 11.png'
import avatar from '../../img/Frame 15.png'

function ArticleCarousel() {
 
  return (
    <Box sx={{ mt: '2rem'}} className='article'>
      <Container sx={{padding: {xs: '0'}  }}>
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 9000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                340: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                860: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{paddingBottom: "1rem"}}
        >
            <SwiperSlide>
              <Card>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  image={article}
                />
                <CardContent sx={{ display:'flex', justifyContent: 'space-between', py: '4px !important'}}>
                  <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    sx={{ width: 40, height: 40 }}
                  />
                  <Box sx={{ display:'flex', justifyContent: 'space-between'}}>
                    <Box display='flex' sx={{alignItems: 'center'}}>
                      <Typography fontSize='12px' component="div">
                        Gaming Disorder: Is It a Real Illness?
                      </Typography>
                    </Box>
                    <Box display='flex' sx={{alignItems: 'end'}}>
                      <Typography fontSize='8px' component="div" color='#01E5F0'>
                        -by Taylor Swift
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
        </Swiper>
      </Container>        
    </Box>
  )
}

export default ArticleCarousel