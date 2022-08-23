import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthProvider"
import Grid from '@mui/material/Grid';
import { Button, InputAdornment, TextField } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';

function Login() {
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    setError('')
                    setUser(data)
                    navigate('/home')
                })
            } else {
                res.json()
                .then(({error}) => setError(error))
            }
        })
    }

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
                        borderRadius: '25px',
                        paddingTop: '100px',
                        paddingBottom: '100px',
                        paddingRight: '70px',
                        paddingLeft: '70px',
                        width:'10%'
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
                    <p style={{color: 'red', textAlign:'center'}}>{error ? error : null}</p>
                    <form onSubmit={handleLogin}>
                        <TextField 
                            label="Username" 
                            type="text"
                            margin="normal" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{width:"100%"}}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleSharpIcon/>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField 
                            label="Password" 
                            type="password"
                            margin="normal"
                            style={{width:"100%"}}
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockSharpIcon/>
                                    </InputAdornment>
                                ),
                            }} 
                        />
                        <div style={{ height: '20px'}}/>
                        <Button 
                            color="primary" 
                            variant="contained" 
                            type="submit"
                            style={{width:"100%"}}  
                            >
                            Log In
                        </Button>
                    </form>
                    <Button 
                        style={{marginBottom: '30px'}} 
                        onClick={()=>{navigate('/createAccount')}}>
                        Not a member? Sign up here!
                    </Button>
                </div>
                <div/>
            </Grid>
            </Grid>
        </div>
    )
}

export default Login

