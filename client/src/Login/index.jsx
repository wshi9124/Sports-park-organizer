import React from "react";
import Grid from '@mui/material/Grid';
import { Button, InputAdornment, TextField } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';

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
                style={{padding: '10px', background:'#71A92C'}}>
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
                        borderRadius: '25px',
                        paddingTop: '100px',
                        paddingBottom: '100px',
                        paddingRight: '70px',
                        paddingLeft: '70px',
                        background:'#FFFFF9',
                        }}
                    >
                    <Grid container justifyContent="center">
                        <img 
                            src="/favicon.ico" 
                            width= '100px' 
                            alt="logo" 
                        />
                    </Grid>
                    <h1 
                        style={{
                            textAlign:'center', 
                            margin:'10px', 
                            fontSize:'60px',
                            color:'green'
                            }}>
                        Park-O
                    </h1>
                    <h2 style={{textAlign:'center', margin:'2px'}}>Your #1 Park event organizer</h2>
                    <TextField label="Username" margin="normal" InputProps={{startAdornment: <InputAdornment><AccountCircleSharpIcon/></InputAdornment>}}/>
                    <TextField label="Password" margin="normal" InputProps={{startAdornment: <InputAdornment><LockSharpIcon/></InputAdornment>}} />
                    <div style={{ height: '20px'}}/>
                    <Button color="primary" variant="contained">
                        Log In
                    </Button>
                    <Button style={{marginBottom: '30px'}}>Not a member? Sign up here!</Button>
                </div>
                <div/>
            </Grid>
            </Grid>
        </div>
    )
}

export default Login

