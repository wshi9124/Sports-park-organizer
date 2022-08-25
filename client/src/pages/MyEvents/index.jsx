import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../AuthProvider";
import NavBar from "../../CommonComponents/NavBar";
import Typography from '@mui/material/Typography'

function MyEvent() {
    const { user } = useContext(AuthContext)
    const [myEvents, setMyEvents] = useState({})

    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => setMyEvents(data))
            }
        })
    },[])

    
    const adminEvents = myEvents.user_events ? myEvents.user_events.filter(userEvent => {
        return userEvent.admin === true
    }) : null

    const joinedEvents = myEvents.user_events ? myEvents.user_events.filter(userEvent => {
        return userEvent.status === "accepted" && userEvent.admin === false
    }) : null

    const pendingEvents = myEvents.user_events ? myEvents.user_events.filter(userEvent => {
        return userEvent.status === "pending" && userEvent.admin === false
    }) : null

    console.log('adminEvents', adminEvents)
    console.log('joinedEvents', joinedEvents)
    console.log('pendingEvents', pendingEvents)

    return(
        <div>
            <NavBar/>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Admin Events
            </Typography>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Joined Events
            </Typography>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Pending Events
            </Typography>
        </div>

    )
}

export default MyEvent