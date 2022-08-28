import React, { useEffect, useState } from "react"
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import NavBar from "../../CommonComponents/NavBar"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea } from '@mui/material'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'auto'
};

function Home() {
  const [currentCard, setCurrentCard] = useState(null)
  const [lat, setLat] = useState(40.730610 )
  const [lng, setLng] = useState(-73.935242)
  const [eventData, setEventData]= useState([])
  const [search, setSearch]= useState('')
  const [errors, setErrors]= useState('')
  const [open, setOpen] = React.useState(false);

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
  },[])

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

  const [ libraries ] = useState(['places'])
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })

  if (!isLoaded) {
      return <div>Loading</div>
  }
  const renderAdmins= currentCard?.user_events?.filter(user => user.admin===true).map(user => (
    <Typography 
      variant="h6" 
      key={user.id}
      style={{textAlign:'center', padding:'0'}}>
      {user.user.username} 
    </Typography>
  ))
  
  const renderNonAdmins= currentCard?.user_events?.filter(user => user.admin===false && user.admin==="accepted" ).map(user => (
    <Typography 
      variant="h6" 
      key={user.id}
      style={{textAlign:'center', padding:'0'}}>
      {user.user.username}
    </Typography>
  ))

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
            {new Date(event.created_at).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  )
  
  const handleRequestToJoinButton= () => {
    fetch('/user_events',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        event_id: currentCard.id
      })
  })
  .then(res => {
      if(res.ok){
          res.json()
          .then(data => {
              setErrors([])
              console.log(data)
          })
      }else {
          res.json()
          .then(({errors}) => {
              setErrors(errors)
          })
      }
  })  
  }

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{textAlign:'center', fontWeight:'bolder'}}>
            {currentCard?.name}- {currentCard?.location} 
          </Typography>
            <Box sx={{height: "100%", display: "flex", flexDirection: "row-reverse"}}>
              <Box sx={{width: '50%', overflow:'auto', marginLeft:'3%', marginBottom:'3%'}}>
              <p style={{color: 'red', textAlign:'center'}}>{errors ? errors.map(error => <span key={error}>{error},  </span>) : null}</p>
                <Typography variant="h4" style={{textAlign:'center'}}>
                  Admin
                </Typography>
                  {renderAdmins}
                  <Grid style={{marginBottom:'5%'}}/>
                <Typography variant="h4" style={{textAlign:'center'}}>
                  Members
                </Typography>
                  {renderNonAdmins}
                  <Button onClick={handleRequestToJoinButton}>Request to join</Button>
              </Box>
              <Box sx={{height: "100%", width: "100%"}}>
                <div style={{height:'95%'}}>
                    <GoogleMap 
                        center={{lat,lng}} 
                        zoom={13} 
                        mapContainerStyle={{width: '100%', height:'100%', marginTop:'.5%'}}
                        options={{
                            streetViewControl: false,
                            mapTypeControl:false,
                            fullscreenControl: false
                        }}
                    >
                    <Marker position={{lat,lng}}/>
                    </GoogleMap>
                </div>
              </Box>
            </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Home
