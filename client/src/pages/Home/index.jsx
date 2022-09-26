import React, { useEffect, useState} from "react"
import HomeModal from "./homeModal"
import NavBar from "../../CommonComponents/NavBar"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import TextField from '@mui/material/TextField'


function Home() {
  const [currentCard, setCurrentCard] = useState(null)
  const [lat, setLat] = useState(40.730610 )
  const [lng, setLng] = useState(-73.935242)
  const [eventData, setEventData]= useState([])
  const [search, setSearch]= useState('')
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] =useState(true)

  const handleOpen = (event) => {
      setOpen(true)
      setCurrentCard(event)
    };
  const handleClose = () => {
    setOpen(false);
    setCurrentCard(null)
  }

  useEffect(() => {
    fetch('/events')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => setEventData(data))
      }
    })
  },[refresh])

  useEffect(() => {
    if (currentCard){
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${currentCard?.location.replaceAll(/[\s,]+/g, "+")}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.status === "OK") {
              setLat(data.results[0].geometry.location.lat)
              setLng(data.results[0].geometry.location.lng)
          } 
      })
    }
  },[currentCard])

  const filteredSearch = eventData.filter(event => event.name.toLowerCase().includes(search.toLowerCase())||event.sport.toLowerCase().includes(search.toLowerCase())).reverse()

  const renderEventData = filteredSearch.map(event => 
    <Grid item xs={6} lg={3} key={event.id}>
    <Card sx={{ maxWidth:"auto", maxHeight:490, minHeight:490 }} style={{overflow:"auto"}} onClick={() => {handleOpen(event)}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="300" 
          image= {event.image_url ? event.image_url : "./noImageAvailable.png" }
          alt= {event.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" style={{marginBottom:'0px'}}>
            {event.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {event.sport}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {event.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{textAlign:'right'}}>
            Posted on {new Date(event.created_at).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  )

  return(
    <div style={{marginTop:'100px'}}>
      <NavBar/>
      <Typography gutterBottom variant="h3" style={{textAlign:'center'}}>
        All Events
      </Typography>
      <Grid style={{marginBottom:'30px', display:'flex', justifyContent:'center'}}>
        <TextField 
          style={{width:'600px'}}
          label="Search by name or sport"
          value={search}
          onChange={(e) => setSearch(e.target.value) }
        />
      </Grid>
      <Grid container spacing={4} style={{paddingRight:'30px', paddingLeft:'30px'}}>
        {renderEventData}
      </Grid>
      <HomeModal 
        open={open} 
        handleClose={handleClose} 
        currentCard={currentCard} 
        setRefresh={setRefresh}
        lat={lat}
        lng={lng}
      />
      <div style={{marginTop:'20px'}}/>
    </div>
  )
}

export default Home
