/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import ChatMembers from "./ChatMembers";
import ChatEvents from "./ChatEvents";
import { ActionCableContext } from "../..";
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
import moment from "moment";


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
    const [currentEvent, setCurrentEvent] = useState(0)
    const [content, setContent] = useState('')
    const cable = useContext(ActionCableContext)
    const [channel, setChannel] = useState(null)
    const [channelMessages, setChannelMessages] = useState([])

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

      useEffect(() => {
        if(currentEvent !== 0){
            const channel = cable.subscriptions.create({
            channel: "MessagesChannel",
            id: currentEvent,
            username: user.username,
            user_id: user.id
            }, {
                received: (data) => {
                    console.log(data)
                    setChannelMessages((channelMessages) => [...channelMessages, data])
                }
            })
            setChannel(channel)
            return () => {
            channel.unsubscribe()
            }
        }
      }, [currentEvent])

    const showMessages= (event) => {
        setChatRoomTitle(`${event.event.name}- ${event.event.location}`)
        fetch(`/events/${event.event_id}`)
        .then(res => {
          if (res.ok) {
            res.json()
            .then(data => {
                setCurrentEvent(data.id)
                setChatMemebers(data.user_events)
                setChatMessages(data.event_messages)
                setChannelMessages([])
                setContent('')
            })
          }
        })
      }

      const submitMessageToChat= (e) => {
        e.preventDefault()
        channel.send({message: content})
        fetch('/event_messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accepts: 'application/json',
            },
            body: JSON.stringify({content, user_id: user.id, event_id: currentEvent }),
          })
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

    const renderMessagesToChat = chatMessages?.map(message => {
        let alignment= ''
        if (user.id === message.user_id){
            alignment = "right"
        }
        else {
            alignment = "left"
        }
        return(
            <ListItem key={message.id}>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText align={alignment} primary={message.content}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align={alignment} secondary={`${message.user.username} ${moment(message.created_at).format('YYYY-MM-DD, h:mm a')}`}></ListItemText>
                    </Grid>
                </Grid>
            </ListItem>
        )
    })

    const renderWebSocketMessages= channelMessages?.map(message => {
        let alignment= ''
        if (user.id === message.id){
            alignment = "right"
        }
        else {
            alignment = "left"
        }
        return(
            <ListItem key={message.id}>
                <Grid container>
                    <Grid item xs={12}>
                        <ListItemText align={alignment} primary={message.data.message}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align={alignment} secondary={`${message.user} ${moment(new Date()).format('YYYY-MM-DD, h:mm a')}`}></ListItemText>
                    </Grid>
                </Grid>
            </ListItem>
        )
    })

    return(
        <div>
            <NavBar/>
            <Grid container style={{marginTop:'8vh'}}/>
            <Grid container component={Paper} className={classes.chatSection}>
                <ChatEvents renderChatEvents={renderChatEvents}/>
                <Grid item xs={7.5}>
                    <List className={classes.messageArea}>
                        <Typography variant="h4" style={{textAlign:'center', fontWeight:'bold'}}>
                            {chatRoomTitle}
                        </Typography>
                        {renderMessagesToChat}
                        {renderWebSocketMessages}
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
                <ChatMembers chatMembers={chatMembers}/>
            </Grid>
        </div>
    )
}

export default ChatRoom