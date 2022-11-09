/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../AuthProvider";
import NavBar from "../../CommonComponents/NavBar";
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '92vh',
      overflowY: 'auto'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0',
        overflowY: 'auto'
    },
    borderLeft500: {
        borderLeft: '1px solid #e0e0e0',
        overflowY: 'auto'
    },
    messageArea: {
      height: '82vh',
      overflowY: 'auto'
    }
  });
  
function ChatRoom() {
    const { user } =useContext(AuthContext)
    const classes = useStyles()
    const [eventData, setEventData] = useState([])
    const [chatRoomTitle, setChatRoomTitle] = useState('')
    const [chatMembers, setChatMemebers]= useState([])
    const [chatMessages, setChatMessages]= useState([])
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => {
          if (res.ok) {
            res.json()
            .then(data => {
                setEventData(data.user_events)
            })
          }
        })
      },[user.id])

    const showMessages= (event) => {
        setChatRoomTitle(`${event.event.name}- ${event.event.location}`)
        fetch(`/events/${event.event_id}`)
        .then(res => {
          if (res.ok) {
            res.json()
            .then(data => {
                setChatMemebers(data.user_events)
                setChatMessages(data.event_messages)
            })
          }
        })
      }

      const submitMessageToChat= (e) => {
        e.preventDefault()
        setContent('')
      }
      

    const renderChatEvents = eventData?.map(event => {
        if (event.status === "accepted") {
        return(
            <ListItem button key={event.id} onClick={() => showMessages(event)}>
                <ListItemIcon>
                    <Avatar alt={event.event.name} src={event.event.image_url ? event.event.image_url : "/emptyEventIcon.png" } />
                </ListItemIcon>
                <ListItemText primary={event.name}>{event.event.name}</ListItemText>
            </ListItem>
        )}
        else return ''
    })

    const renderAdminsToChat = chatMembers.map(member => {
        if (member.admin === true) {
            return(
                <ListItem key={member.user.username}>
                    <ListItemIcon>
                        <Avatar alt={member.user.username} src={member.user.avatar_url} />
                    </ListItemIcon>
                    <ListItemText primary={member.user.username}>{member.user.username}</ListItemText>
                </ListItem>
            )
        }
    })

    const renderMembersToChat = chatMembers.map(member => {
        if (member.admin === false) {
            return(
                <ListItem key={member.user.username}>
                    <ListItemIcon>
                        <Avatar alt={member.user.username} src={member.user.avatar_url} />
                    </ListItemIcon>
                    <ListItemText primary={member.user.username}>{member.user.username}</ListItemText>
                </ListItem>
            )
        }
    })

    // const renderMessagesToChat = chatMessages.map(message => {

    // })

    return(
        <div>
            <NavBar/>
            <Grid container style={{marginTop:'8vh'}}/>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={2.5} className={classes.borderRight500}>
                    <Typography style={{paddingLeft: '11px', marginTop:'10px'}}>
                        Events
                    </Typography>
                    <List>
                        {renderChatEvents}
                    </List>
                </Grid>
                <Grid item xs={7.5}>
                    <List className={classes.messageArea}>
                        <Typography variant="h4" style={{textAlign:'center', fontWeight:'bold'}}>
                            {chatRoomTitle}
                        </Typography>
                        {/* <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="3">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="10:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem> */}
                    </List>
                    <Divider />
                    {chatRoomTitle ? 
                    <form onSubmit={submitMessageToChat}>
                        <Grid container style={{padding: '20px'}}>
                            <Grid item xs={11}>
                                <TextField 
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)} 
                                    id="outlined-basic-email" 
                                    label="Message" 
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={1} align="right">
                                <Fab button type='submit' color="primary" aria-label="add"><SendIcon /></Fab>
                            </Grid>
                        </Grid>
                    </form> :
                    <Typography variant="h4" style={{textAlign:'center', fontWeight:'bold', marginTop:'30px'}}>
                        Please choose an event to chat in 
                    </Typography>
                    }
                </Grid>
                <Grid item xs={2} className={classes.borderLeft500}>
                    <Grid item xs={12} style={{padding: '10px'}}>
                        <Typography>
                            Admin
                        </Typography>
                        <List>
                            {renderAdminsToChat}
                        </List>
                        <Typography>
                            Members
                        </Typography>
                        <List>
                            {renderMembersToChat}
                        </List>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default ChatRoom