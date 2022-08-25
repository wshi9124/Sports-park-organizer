import React, { useState } from "react";
import CreateNewEventGoogleMaps from "./CreateNewEventGoogleMaps";
import NavBar from "../../CommonComponents/NavBar";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function CreateNewEvent() {
    const [location, setLocation]= useState('')
    const [lat, setLat] = useState(40.730610)
    const [lng, setLng] = useState(-73.935242)
    const theme = createTheme();

    const createEventForm= (e) => {
        e.preventDefault()
        setLocation(location => location + " ")
    }
    
    return(
        <div>
        <NavBar/>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
                <CreateIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
                Create New Event
            </Typography>
            <Box component="form" sx={{ mt: 3 }} onSubmit={createEventForm}>
                <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Sport"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows={3}
                    />
                </Grid>
                <CreateNewEventGoogleMaps 
                    location={location} 
                    setLocation={setLocation}
                    lat={lat}
                    setLat={setLat}
                    lng={lng}
                    setLng={setLng}
                />
                </Grid>
                <div style={{textAlign:"center", marginTop:"30px"}}>
                <p style={{marginRight:"60px", marginTop:"40px", marginBottom:"0px"}}>Upload Event Pic (required)</p>
                    <input 
                        type="file" 
                        accept="image/*" 
                    />
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Create Event
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
        </div>
  )
}


export default CreateNewEvent