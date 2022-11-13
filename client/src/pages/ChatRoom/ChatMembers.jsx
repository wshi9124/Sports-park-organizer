/* eslint-disable array-callback-return */
import React from "react";
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    borderLeft500: {
        borderLeft: '1px solid #e0e0e0',
        overflowY: 'auto'
    }
  });

function ChatMembers({chatMembers}) {
    const classes = useStyles()
   
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

    return(
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
    )
}

export default ChatMembers