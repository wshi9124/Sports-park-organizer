import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../AuthProvider";
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';

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

function HomeModal({open, handleClose, currentCard, setRefresh, lat, lng}) {
  const {user} = useContext(AuthContext)
  const [ue, setUe] = useState({})

  useEffect(() => {
    setUe(currentCard?.user_events.find(ue => user.id === ue.user_id))
  }, [currentCard, user.id])
  console.log(ue)

    const [ libraries ] = useState(['places'])
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries
    })
  
    if (!isLoaded) {
        return <div>Loading</div>
    }

    const renderAdmins= currentCard?.user_events?.filter(user => user.admin===true).map(user => (
        <div key={user.id} style={{display:'flex', justifyContent:'center', padding:'1px'}}>
            <Avatar src={user.user.avatar_url} sx={{ width: 30, height: 30 }}/>
            <Typography 
              variant="h6" 
              style={{textAlign:'center', paddingLeft:'3px'}}>
              {user.user.username} 
            </Typography>
        </div>
      ))

      const renderNonAdmins= currentCard?.user_events?.filter(user => user.admin===false && user.admin==="accepted" ).map(user => (
          <div key={user.id} style={{display:'flex', justifyContent:'center', padding:'1px'}}>
            <Avatar src={user.user.avatar_url} sx={{ width: 30, height: 30 }}/>
            <Typography 
              variant="h6" 
              key={user.id}
              style={{textAlign:'center', paddingLeft:'3px'}}>
              {user.user.username}
            </Typography>
          </div>
      ))

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
              .then(() => {
                  setRefresh(state => !state)
                  setUe({status: "pending"})
              })
          }
      })  
      }

    return(
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{textAlign:'center'}}>
            {currentCard?.name}- {currentCard?.location} 
          </Typography>
            <Box sx={{height: "100%", display: "flex", flexDirection: "row-reverse"}}>
              <Box sx={{width: '50%', overflow:'auto', marginLeft:'3%', marginBottom:'3%'}}>
              <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}>
                <Typography variant="h6" style={{textAlign:'center', marginRight:'5px'}}>
                  Status -
                </Typography>
                {ue?.status ? <p style={{marginTop:'3px'}}>{ue.status}</p> : <Button size="small" onClick={handleRequestToJoinButton}>Request to join</Button>}
              </div>
                <Typography variant="h4" style={{textAlign:'center'}}>
                  Admin
                </Typography>
                  {renderAdmins}
                <Typography variant="h4" style={{textAlign:'center', marginTop:'5px'}}>
                  Members
                </Typography>
                {renderNonAdmins}
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