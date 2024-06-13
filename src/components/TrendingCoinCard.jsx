import { Link } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function TrendingCoin(coin) {
  return (
    <Card sx={{ minWidth: 250 , maxWidth: 250}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          width="100"
          image={coin.image}
          alt={coin.name}
          className='p-3 rounded-md '
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {coin.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            price in btc: {coin.priceBtc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/${coin.id}`}>
          <Button size="small" color="primary">
            Show Coin
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
