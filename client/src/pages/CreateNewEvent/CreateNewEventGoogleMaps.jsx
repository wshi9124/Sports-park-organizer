import React, { useState } from "react"
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";


function CreateNewEventGoogleMaps({location, setLocation, lat, setLat, lng, setLng}) {
    const [map, setMap] = useState(null) 

    const center = { lat:40.730610 , lng:-73.935242 }
    const [ libraries ] = useState(['places'])

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })
    
    if (!isLoaded) {
        return <div>Loading</div>
    }
    
    const geocodeLocation = (e) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=$${location.replaceAll(/[\s,]+/g, "+")}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "OK") {
                setLat(data.results[0].geometry.location.lat)
                setLng(data.results[0].geometry.location.lng)
            }
                map.panTo({lat:lat, lng:lng})
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
            <Button 
                color="success"
                type="button"
                variant="outlined"
                style={{marginBottom:'32px'}}
                onClick={geocodeLocation}
                >
                See Location (New York City)
            </Button>
            <div style={{height:'550px'}}>
                <GoogleMap 
                    center={center} 
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
