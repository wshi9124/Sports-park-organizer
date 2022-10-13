import React from "react";
import { useContext } from "react";
import { Typography } from "@mui/material";
import AuthContext from "../../AuthProvider";

function EditEventForm() {
    const { individualEvent } = useContext(AuthContext)
    console.log(individualEvent)
    return(
        <div>
            <Typography gutterBottom variant="h4" style={{textAlign:'center'}}>
                    Edit Event Details 
            </Typography>
            <p>hi</p>
        </div>
    )
}

export default EditEventForm