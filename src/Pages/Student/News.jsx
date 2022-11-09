import React from 'react'
// import { Navigate } from 'react-router-dom';
import { Container, Grid, ImageListItemBar } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
// import gamenews2 from '../../img/Frame 71.png'

function News() {
 
  return (
    <div className='bg-white'>
      <Container sx={{mt: "2.5rem"}}>
        <Grid container sx={{mx: "0", width: "100%"}}>
          <Grid item xs={7} >
            <a href="https://kids.frontiersin.org/articles/10.3389/frym.2022.722958" target='_blank' rel="noreferrer">
              <Box position="relative" sx={{height: '100%'}}>
                <Box position="absolute" className="image-overlay"></Box>
                <img src='news.jpg' alt='' width='100%' height='100%'/>
                <ImageListItemBar
                  sx={{                    
                    background:
                      'transparent',
                      textAlign: 'center'
                  }}
                  title= 'How Plants and Bacteria can Clean the Earth'
                  position="bottom"
                />
              </Box>
            </a>
          </Grid>
          <Grid item xs={5} sx={{ pl: '20px'}}>
            <a href="https://kids.nationalgeographic.com/games/quizzes/article/cheetahs" target='_blank' rel="noreferrer">
              <Box position="relative" sx={{height: '100%'}}>
                <Box position="absolute" className="image-overlay"></Box>
                <img src='quiz.webp' alt='' width='100%' height='100%'/>
                <ImageListItemBar
                  sx={{
                    background: 'transparent',
                    textAlign: 'center'
                  }}
                  title= 'Cheetah Quiz'
                  position="bottom"
                />
              </Box>
            </a>
          </Grid>
        </Grid> 
        <Grid container sx={{m: "1rem 0", width: "100%"}}>
          <Grid item xs={5} sx={{ pr: "16px"}}>
            {/* <a href="https://kids.nationalgeographic.com/games/quizzes/article/cheetahs" target='_blank' rel="noreferrer"> */}
            <Link to='/news'>
              <Box position="relative" sx={{height: '100%'}}>
                <Box position="absolute" className="image-overlay"></Box>
                <img src='article.webp' alt='' width='100%' height="100%"/>
                <ImageListItemBar
                  sx={{
                    background:
                      'transparent',
                      textAlign: 'center'
                  }}
                  title= "Ramsay Hunt Syndrome, Explained"
                  position="bottom"
                />
              </Box>
            </Link>
            {/* </a> */}
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%'}}> 
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Rm75wYlRTd0" title="5 Eco-Friendly DIYs to Protect the Planet | Kids Vs. Plastic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
            </Box>
          </Grid>        
        </Grid>      
      </Container>
    </div>
    // kamalmanoj9@gmail.com
  )
}

News.propTypes={

}

export default News