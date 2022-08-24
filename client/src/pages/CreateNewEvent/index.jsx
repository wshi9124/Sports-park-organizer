import React from "react";
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
    return(
        <div>
            <NavBar/>
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <CreateIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
                Create New Event
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={5}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="UserName"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Email Address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    />
                </Grid>
                </Grid>
                <div style={{textAlign:"center", marginTop:"30px"}}>
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
                    Sign Up
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
        </div>
  )
}


export default CreateNewEvent