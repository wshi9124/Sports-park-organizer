import React, { useState } from "react"
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import { useRef } from "react";
import { useCallback } from "react";


function CreateNewEventGoogleMaps({location, setLocation, lat, setLat, lng, setLng}) {
    const mapRef = useRef()
    const onMapLoad = useCallback(map => {
        mapRef.current = map
      }, [])

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
        e.preventDefault()
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
    } 

    return(
        <Grid item xs={12}>
            <Autocomplete onPlaceSelected={(place)=> console.log(place)}>
                <TextField
                    fullWidth
                    label="Location"
                    // value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    // onChange={(e) => setLocation(e.target.value)}
                />
            </Autocomplete>
            <Button 
                color="success"
                variant="outlined"
                style={{marginBottom:'32px'}}
                onClick={geocodeLocation}
                >
                See Location
            </Button>
            <div style={{height:'550px'}}>
                <GoogleMap 
                    onLoad={onMapLoad}
                    center={center} 
                    zoom={11} 
                    mapContainerStyle={{width: '100%', height:'100%'}}
                    options={{
                        streetViewControl: false,
                        mapTypeControl:false,
                        fullscreenControl: false
                    }}
                >
                {/* <Marker position={{lat,lng}}/> */}
                </GoogleMap>
            </div>
        </Grid>

    )
}

export default CreateNewEventGoogleMaps
