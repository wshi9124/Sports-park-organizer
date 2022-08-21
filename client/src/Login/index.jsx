import React from "react";
import Grid from '@mui/material/Grid';
import { Button, TextField } from "@mui/material";

function Login() {
    return(
        <div>
            <Grid container style={{ minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                <img 
                    src="/sportsLogin.jpeg" 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                    alt="loginPic" 
                />
                </Grid>
            <Grid 
                container 
                item 
                xs={12} 
                sm={6} 
                alignItems="center" 
                direction="column" 
                justifyContent="space-between"
                style={{padding: '10px'}}>
                < div/>
                <div 
                    style={{
                        display:'flex', 
                        flexDirection: 'column',
                        maxWidth: '450px',
                        minWidth: '350px',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        paddingTop: '150px',
                        paddingBottom: '150px',
                        paddingRight: '100px',
                        paddingLeft: '100px'
                        }}
                    >
                    <Grid container justifyContent="center">
                        <img 
                            src="/favicon.ico" 
                            width= '150px' 
                            alt="logo" 
                        />
                    </Grid>
                    <TextField label="Username" margin="normal" />
                    <TextField label="Password" margin="normal" />
                    <div style={{ height: '20px'}}/>
                    <Button color="primary" variant="contained">
                        Log In
                    </Button>
                    <Button>Not a member? Sign up here!</Button>
                </div>
                <div/>
            </Grid>
            </Grid>
        </div>
    )
}

export default Login