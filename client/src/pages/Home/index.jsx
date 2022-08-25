import React, { useEffect, useState } from "react"
import NavBar from "../../CommonComponents/NavBar"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import TextField from '@mui/material/TextField'


function Home() {
  const [eventData, setEventData]= useState([])
  const [search, setSearch]= useState('')

  useEffect(() => {
    fetch('/events')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => setEventData(data))
      }
    })
  },[])
  console.log(eventData)

  const filteredSearch = eventData.filter(event => event.name.toLowerCase().includes(search.toLowerCase())||event.sport.toLowerCase().includes(search.toLowerCase())).reverse()

  const renderEventData = filteredSearch.map(event => 
    <Grid item xs={6} lg={3} key={event.id}>
    <Card sx={{ maxWidth:"auto", maxHeight:370, minHeight:370 }} style={{overflow:"auto"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="230"
          image= {event.image_url ? event.image_url : "./noImageAvailable.png" }
          alt= {event.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {event.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {event.sport} Posted on
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  )

  return(
    <div>
      <NavBar/>
      <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
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
      <Grid container spacing={4} style={{paddingRight:'20px', paddingLeft:'20px'}}>
        {renderEventData}
      </Grid>
    </div>
  )
}

export default Home