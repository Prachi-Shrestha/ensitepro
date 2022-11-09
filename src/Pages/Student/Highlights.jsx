import { Box, Card, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"; 
import "swiper/css/navigation";
import { Navigation } from "swiper";
import '../../style.css';

const HighlightCard = styled('div')(({ theme }) => ({
  borderWidth: '1px 1px 1px 0px',
  borderStyle: 'solid',
  borderColor: 'rgba(39, 39, 39, 0.2)',
  borderRadius: '0px 4px 4px 0px',
}));

function Highlights() {
  return (
    <div className='bg-white highlights'>
      <Container sx={{ py: '0.9rem'}}>
        <Typography variant="subtitle2" component="div" color='#226CE0' fontWeight='600' textAlign='center'sx={{ pb: '0.9rem'}}>
          Major Highlights
        </Typography>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          340: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        >
          <SwiperSlide>
            <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
          <Card sx={{boxShadow: '0', pb: '4px'}}>
              <Grid container>
                <Grid item xs={4}>
                  <Box sx={{ background: 'rgba(1, 229, 240, 0.5)', height:'100%', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="h4">
                      18
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <HighlightCard>
                    <Box display='flex' sx={{justifyContent: 'space-between', p: '0.25rem'}}>
                      <Box>
                        <Typography fontSize='10px' gutterBottom fontWeight='600'>
                          Shrawan 18, 2079
                        </Typography>
                        <Typography fontSize='12px' gutterBottom fontWeight='600'>
                          Parents Day 
                        </Typography>
                        <Typography fontSize='10px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                      <Box>
                        <Typography fontSize='8px' gutterBottom fontWeight='400'>
                          03 Aug 2022
                        </Typography>
                      </Box>
                    </Box>
                  </HighlightCard>
                </Grid>
              </Grid>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}

export default Highlights