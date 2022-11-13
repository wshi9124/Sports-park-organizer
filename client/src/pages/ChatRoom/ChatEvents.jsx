import React from "react";
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    borderRight500: {
        borderRight: '1px solid #e0e0e0',
        overflowY: 'auto'
    }
  })

function ChatEvents({renderChatEvents}) {
const classes = useStyles()

return(
    <Grid item xs={2.5} className={classes.borderRight500}>
        <Typography style={{paddingLeft: '11px', marginTop:'10px'}}>
            Events
        </Typography>
        <List>
            {renderChatEvents}
        </List>
    </Grid>
)
}

export default ChatEvents