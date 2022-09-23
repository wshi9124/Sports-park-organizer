import React, { useState } from "react"
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";


function CreateNewEventGoogleMaps({location, setLocation, lat, setLat, lng, setLng}) {
    const [map, setMap] = useState(null) 
    const [mapMessage, setMapMessage] = useState('')

    const [libraries] = useState(['places']);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })
    
    if (!isLoaded) {
        return <div>Loading</div>
    }

    const geocodeLocation = (e) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.replaceAll(/[\s,]+/g, "+")}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "OK") {
                setMapMessage('')
                setLocation(data.results[0].formatted_address);
                setLat(data.results[0].geometry.location.lat)
                setLng(data.results[0].geometry.location.lng)
                map.panTo({lat:data.results[0].geometry.location.lat, lng:data.results[0].geometry.location.lng})
            } else {
                setMapMessage("Location not found please try again")
            }
        })
    } 

    return(
        <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /> 
            <div style={{display:'flex', alignItems:'center', marginBottom:'32px', paddingTop:'0'}}>
                <Button 
                    color="success"
                    type="button"
                    variant="outlined"
                    onClick={geocodeLocation}
                    >
                    Format Address
                </Button>
                <p style={{margin:'0', paddingLeft:"10px", color:'red', width:'300px'}}>{mapMessage}</p>
            </div>
            <div style={{height:'550px'}}>
                <GoogleMap 
                    center={{lat,lng}} 
                    zoom={11} 
                    mapContainerStyle={{width: '100%', height:'100%'}}
                    options={{
                        streetViewControl: false,
                        mapTypeControl:false,
                        fullscreenControl: false
                    }}
                    onLoad = {(map) => setMap(map)}
                >
                <Marker position={{lat,lng}}/>
                </GoogleMap>
            </div>
        </Grid>

    )
}

export default CreateNewEventGoogleMaps
