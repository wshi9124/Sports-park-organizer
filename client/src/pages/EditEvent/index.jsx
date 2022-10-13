import React from "react";
import EditEventForm from "./EditEvent";
import NavBar from "../../CommonComponents/NavBar";
import { Typography } from "@mui/material";

function EditEvent() {
    return (
        <div style={{marginTop:'100px', textAlign:'center'}}>
            <NavBar/>
            <div style={{display:'flex'}}>
                <div style={{width:'70%'}}>
                    <EditEventForm/>
                </div>
                <div style={{width:'30%'}}>
                    <Typography gutterBottom variant="h4" style={{textAlign:'center'}}>
                        Manage Users
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default EditEvent