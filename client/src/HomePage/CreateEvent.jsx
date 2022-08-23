// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
// import { useState } from 'react';


// const theme = createTheme();

// function CreateEvent() {
//     const [email, setEmail] = useState('')
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [errors, setErrors] = useState('')
//     const [confirmPassword, setConfirmPassword] = useState('')

//     function onSubmit(e){
//         e.preventDefault()
//         const user = {
//             email,
//             username,
//             password
//         }
//         fetch('/user',{
//             method: "POST",
//             headers:{'Content-Type':'application/json'},
//             body:JSON.stringify(user)
//         })
//         .then(res => {
//             if(res.ok){
                
//             }
//         })
//     }

// return (
//     <ThemeProvider theme={theme}>
//     <Container component="main" maxWidth="xl">
//         <CssBaseline />
//         <Box
//         sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         }}
//         >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//             Create Account
//         </Typography>
//         <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={5}>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 id="username"
//                 label="UserName"
//                 name="username"
//                 autoComplete="username"
//                 onChange={(e) => setUsername(e.target.value)}
//                 />
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 />
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 />
//             </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                 required
//                 fullWidth
//                 name="confirmpassword"
//                 label="Confirm Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//             </Grid>
//             </Grid>
//             <div>
//             <Stack direction="row" alignItems="center" spacing={2}>
            
//             <Button variant="contained" component="label">
//                 Upload Image 
//             <input hidden accept="image/*" multiple type="file" />
//             </Button>
            
//             <IconButton color="primary" aria-label="upload picture" component="label">
//             <input hidden accept="image/*" type="file" />
//             </IconButton>
//             </Stack>
//             </div>
//             <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             >
//             Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//             <Grid item>
//                 <Link href="#" variant="body2">
//                 Already have an account? Sign in
//                 </Link>
//             </Grid>
//             </Grid>
//         </Box>
//         </Box>
//     </Container>
//     </ThemeProvider>
//   );
// }

// export default CreateEvent