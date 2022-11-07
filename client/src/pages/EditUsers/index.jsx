import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthProvider";
import NavBar from "../../CommonComponents/NavBar";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';

function EditUsers() {
    const { individualEvent } = useContext(AuthContext)
    const [pendingUsers, setPendingUsers] = useState([])
    const [refresh, setRefresh] =useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/events/${individualEvent.event_id}`)
            .then(res => {
            if(res.ok) {
                res.json()
                .then(data => {
                    setPendingUsers(data.user_events)
                })
            }
        })
    },[individualEvent.event_id,refresh])

    const handleAcceptButton= (id) => {
        fetch(`/user_events/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              status: 'accepted',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(() => setRefresh(state => !state))
    }

    const handleDeclineButton= (id) => {
        fetch(`/user_events/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
              status: 'declined',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          }).then(() => setRefresh(state => !state))
    }

    // eslint-disable-next-line array-callback-return
    const renderPendingUsers= pendingUsers?.map( user => {
        if (user.status === 'pending'){
            return(
                <div key={pendingUsers.id} style={{display:'flex', alignItems:'center', marginTop:"20px"}}>
                    <Avatar 
                        alt={user.user.username} 
                        src={user.user.avatar_url} 
                        sx={{ width: 80, height: 80 }}
                        />
                    <Typography variant="h5" style={{marginLeft:'20px'}}>
                        {user.user.username}
                    </Typography>
                    <Button 
                        onClick={() => handleAcceptButton(user.id)}
                        variant="contained" 
                        color="success"
                        style={{marginLeft:'20px'}}
                        >Accept
                    </Button>
                    <Button
                        onClick={() => handleDeclineButton(user.id)}
                        color="error"
                        style={{marginLeft:'20px'}}
                        >Decline
                    </Button>
                </div>
            )}
    })

    return (
        <div style={{marginTop:'100px', textAlign:'center'}}>
            <NavBar/>
                <div style={{width:'100%'}}>
                    <Typography gutterBottom variant="h3" style={{textAlign:'center'}}>
                        Pending Users- {individualEvent.event.name}
                    </Typography>
                    <Stack direction="column" style={{display:'flex', alignItems:'center'}}>
                        {renderPendingUsers}
                    </Stack>
                    <Button 
                        onClick={() => navigate('/myEvents')}
                        style={{marginTop:"20px"}}
                        size="large"
                    >Back to My Events
                    </Button>
                </div>
        </div>
    )
}

export default EditUsers