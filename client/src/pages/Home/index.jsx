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

  const filteredSearch = eventData.filter(event => event.name.toLowerCase().includes(search.toLowerCase())) 

  const renderEventData = filteredSearch.map(event => 
    <Grid item lg={3} key={event.id}>
    <Card sx={{ maxWidth:"auto", maxHeight:350, minHeight:350 }} style={{overflow:"auto"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image="https://lp-cms-production.imgix.net/2021-04/GettyRF_537912746.jpg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {event.name}
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
      <Grid style={{marginLeft:'650px', marginRight:'650px', marginBottom:'30px'}}>
        <TextField 
          fullWidth 
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