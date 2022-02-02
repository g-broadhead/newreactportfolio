import * as React from 'react';
import DateNight from '../../Assets/images/dateNight.JPG'
import ChatWallet from '../../Assets/images/chatWallet.JPG'
import PassGen from '../../Assets/images/Password Generator.JPG'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Projects = () => {
  return (
    <>
      <Container
      sx={{ flexGrow: 1, mt: '15px', mb:'10px' }}
      display="flex"
      >
        <Grid container spacing={5}>
          <Grid item xs={11}>
            <Item><h1>Projects</h1></Item>
          </Grid>
          <Box
          m={1}
          display="flex"
          flexDirection='row'
          >
            <Card sx={{ maxWidth: 345, mt: '10px', mr: '10px' }}>
              <CardMedia
                component='img'
                height='140'
                src={DateNight}
                alt='DateNight'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Date Night
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Website for generating a recipe and random movie for users.
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="https://g-broadhead.github.io/project-ghoat/">Go To</Link>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, mt: '10px', mr:'10px' }}>
              <CardMedia
                component="img"
                height="140"
                image={ChatWallet}
                alt="Chat Wallet"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chat Wallet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a chatroom website created for instant messaging about different topics.
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="https://chat-wallet.herokuapp.com/">Go To</Link>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345, mt: '10px', mr: '10px' }}>
              <CardMedia
                component='img'
                height='140'
                image={PassGen}
                alt='Password Generator'
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Password Generator
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Password generator that takes user input for a desired password.
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="https://g-broadhead.github.io/passwordGen/">Go To</Link>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Container>
    </>
  )
}

export default Projects;