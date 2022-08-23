import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthProvider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CreateAccount() {
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [errors, setErrors] = useState([])
    const theme = createTheme();
    
    const handleLogin = (e) => {
        e.preventDefault()
        const formData = new FormData()
            if (avatar) {
                formData.append('avatar', avatar)
            }
            formData.append('email', email)
            formData.append('username', username)
            formData.append('password', password)
            formData.append('password_confirmation', confirmPassword)
           
        fetch('/users',{
            method: "POST",
            body: formData
        })
        .then(res => {
            if(res.ok){
                res.json()
                    .then(data => {
                        setErrors([])
                        setUser(data)
                        console.log(data)
                        navigate('/home')
                    })
            }else {
                res.json()
                .then(({errors}) => {
                    setErrors(errors)
                    setPassword('')
                    setConfirmPassword('')
                })
            }    
        })
    }

    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Create Account
            </Typography>
            <p style={{color: 'red', textAlign:'center'}}>{errors ? errors.map(error => <span key={error}>{error},  </span>) : null}</p>
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 3 }}>
                <Grid container spacing={5}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="UserName"
                    value= {username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Email Address"
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Grid>
                </Grid>
                <div style={{textAlign:"center", marginTop:"30px"}}>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={e => setAvatar(e.target.files[0])}
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
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link onClick={() => navigate("/login")}>
                    Already have an account? Sign in
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    );
    }

export default CreateAccount