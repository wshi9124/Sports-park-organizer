import React, { useEffect, useState } from "react"
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import NavBar from "../../CommonComponents/NavBar"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [currentCard, setCurrentCard] = useState(null)
  const [eventData, setEventData]= useState([])
  const [search, setSearch]= useState('')
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
  console.log(eventData)

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
            {event.sport} Posted on
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
          <Typography id="modal-modal-title" variant="h5" component="h2" style={{textAlign:'center'}}>
            {currentCard?.name}
          </Typography>
          <Grid>

          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default Home