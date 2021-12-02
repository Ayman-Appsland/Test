import React, { FC } from 'react'
import {Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Fab} from '@mui/material';
import Pitza from '../assets/imgs/paella.jpeg'
const ImageCard:FC = () => {
    return (
        <Card sx={{ mt: 4, maxWidth:400,m:"auto" }}>
        <CardMedia
          component="img"
          height="140"
          image={Pitza}
          alt="pitza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Fab size="small" variant="extended" color="primary">Share</Fab>
          <Fab size="small" variant="extended" color="secondary">Learn More</Fab>
        </CardActions>
      </Card>
    )
}

export default ImageCard
