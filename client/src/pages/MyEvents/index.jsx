import React from "react";
import NavBar from "../../CommonComponents/NavBar";
import Typography from '@mui/material/Typography'

function MyEvent() {
    return(
        <div>
            <NavBar/>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                My Events
            </Typography>
        </div>

    )
}

export default MyEvent