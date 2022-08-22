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
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

function CreateAccount() {
    const navigate = useNavigate()
    const { setUser } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const theme = createTheme();
    
    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            username,
            password,
            password_confirmation: confirmPassword
        }
        fetch('/users',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json()
                    .then(data => {
                        setErrors([])
                        setUser(data)
                        navigate('/home')
                    })
            }else {
                res.json()
                .then(({errors}) => setErrors(errors))
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
            <p style={{color: 'red', textAlign:'center'}}>{errors ? errors.map(error => <span>{error},  </span>) : null}</p>
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
                <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                    Upload Image 
                <input hidden accept="image/*" multiple type="file" />
                </Button>
                
                <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                </IconButton>
                </Stack>
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
                    <Link href="#" variant="body2">
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