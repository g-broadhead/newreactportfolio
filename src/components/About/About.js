import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Garrett from '../../Assets/images/223666606_10222136457692722_7453335091996139072_n.jpg'

const About = () => {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));
  
  return (
    <Container
      sx={{
        flexGrow: 1,
        mt: '20px'
      }}
      display='flex'
    >
      <Grid
      container spacing={5}
      >
        <Grid item xs={11}>
          <Item>
            <h1>Welcome to my portfolio</h1>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>About Me</h3>
            <p>
              Hello, my name is Garrett Broadhead. I am currently a Full Stack Wed Developer student through the UCI Coding Bootcamp. Although I am new to development, I am not new to the web development sector. I have been a Quality Assurance Specialist for Websites and Apps for 8 years.
              <br></br>
              This portfolio is a work in progress to show the skills I have gained as a Web Developer. I am looking forward to my future as a Full Stack Web Developer.
            </p>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="345"
                image={Garrett}
                alt="Picture of Garrett"
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>

  )
}

export default About;