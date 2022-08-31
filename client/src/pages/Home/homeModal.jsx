import React, { useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'


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

function HomeModal({open, handleClose, currentCard, errors, handleRequestToJoinButton, lat, lng}) {

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

    return(
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
    )
}

export default HomeModal