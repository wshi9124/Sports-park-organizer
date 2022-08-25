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
    const theme = createTheme();
    const [name, setName] = useState('')
    const [sport, setSport] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [location, setLocation]= useState('')
    const [lat, setLat] = useState(40.730610)
    const [lng, setLng] = useState(-73.935242)
    const [errors, setErrors] = useState([])
    
    const createEventForm= (e) => {
        e.preventDefault()
        const formData = new FormData()
        if (image) {
            formData.append('image', image)
        }
        formData.append('name', name)

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Sport"
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
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
                <p style={{marginRight:"60px", marginTop:"40px", marginBottom:"0px"}}>Upload Event Pic</p>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setImage(e.target.files[0])}
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