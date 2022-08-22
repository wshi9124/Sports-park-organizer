import React, {useState} from "react";
import Grid from '@mui/material/Grid';
import { Button, TextField } from "@mui/material";

function CreateAccount() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            username,
            password
        }
        fetch('/user',{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                
            }
        })
    }
    return(
        <Grid>
            <h1>Create Account</h1>
            <form onSubmit={onSubmit}>
                <TextField 
                    label="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                    label="Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField 
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit">
                    Create Account
                </Button>
            </form>
        </Grid>
    )
}

export default CreateAccount