import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../AuthProvider";
import AdminEvents from "./AdminEvents";
import JoinedEvents from "./JoinedEvents";
import PendingEvents from "./PendingEvents";
import NavBar from "../../CommonComponents/NavBar";
import Typography from '@mui/material/Typography'


function MyEvent() {
    const { user } = useContext(AuthContext)
    const [adminEvents, setAdminEvents] =useState([])
    const [joinedEvents, setJoinedEvents] =useState([])
    const [pendingEvents, setPendingEvents] =useState([])
    const [refresh, setRefresh] =useState(true)


    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => {
            if (res.ok) {
                res.json()
                .then(data => {
                    const adminData = data.user_events ? data.user_events.filter(userEvent => {
                        return userEvent.admin === true
                    }) : null
                    setAdminEvents(adminData)
                    const joinedData = data.user_events ? data.user_events.filter(userEvent => {
                        return userEvent.status === "accepted" && userEvent.admin === false
                    }) : null
                    setJoinedEvents(joinedData)
                    const pendingData = data.user_events ? data.user_events.filter(userEvent => {
                        return userEvent.status === "pending" && userEvent.admin === false
                    }) : null
                    setPendingEvents(pendingData)
                })
            }
        })
    },[user.id, refresh])
    

    console.log('adminEvents', adminEvents)
    console.log('joinedEvents', joinedEvents)
    console.log('pendingEvents', pendingEvents)

    return(
        <div style={{marginBottom:'80px'}}>
            <NavBar/>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Admin Events
            </Typography>
            <AdminEvents adminEvents={adminEvents} setRefresh={setRefresh}/>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Joined Events
            </Typography>
            <JoinedEvents joinedEvents={joinedEvents}/>
            <Typography gutterBottom variant="h3" style={{marginTop:'100px', textAlign:'center'}}>
                Pending Events
            </Typography>
            <PendingEvents pendingEvents={pendingEvents}/>
        </div>
    )
}

export default MyEvent