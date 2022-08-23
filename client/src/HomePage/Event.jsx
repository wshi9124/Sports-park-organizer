import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Events() {
  return (
    <Card sx={{ maxWidth: 465 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="350"
        image="https://tse3.mm.bing.net/th?id=OIP.nbk8iUIVLUT593xHHF77bgHaE7&pid=Api&P=0"
        alt="green iguana"
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
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Join
      </Button>
    </CardActions>
  </Card>
);
}

export default Events