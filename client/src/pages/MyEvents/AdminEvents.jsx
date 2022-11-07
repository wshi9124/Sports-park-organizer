import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../AuthProvider'
import { useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button';

function AdminEvents({adminEvents, setRefresh}) {
    const navigate = useNavigate()
    const { setIndividualEvent } = useContext(AuthContext)

    const deleteAdminPost= (id) => {
        fetch(`events/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
             }
        }).then(() => setRefresh(state => !state))
        // const updatedAdminData= adminEvents.filter(event => event.id !== adminEvents.id)
        // setAdminEvents(updatedAdminData)
    }

    const handleEditButton= (user) => {
     setIndividualEvent(user)
     navigate('/editUsers')
    }   

        const renderAdminEvents = adminEvents?.map(user => (
            <Grid item xs={6} lg={3} key={user.event.id}>
                <Card sx={{ maxWidth:"auto", maxHeight:490, minHeight:490 }} style={{overflow:"auto"}}>
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="300" 
                    image= {user.event.image_url ? user.event.image_url : "./noImageAvailable.png" }
                    alt= {user.event.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h4" component="div" style={{marginBottom:'0px'}}>
                        {user.event.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {user.event.sport}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {user.event.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{textAlign:'right'}}>
                        Posted on {new Date(user.event.created_at).toDateString()}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
                <Button variant="contained" color="error" style={{float:'right'}} onClick={() => deleteAdminPost(user.event.id)}>Delete Post</Button>
                <Button variant="contained" color="info" style={{float:'right'}} onClick={() => handleEditButton(user)}> Manage Users</Button>
            </Grid>
         ))
   
    return(
        <Grid container direction='row' spacing={4} style={{paddingRight:'20px', paddingLeft:'20px'} }>
            {renderAdminEvents}
        </Grid>
    )
}

export default AdminEvents