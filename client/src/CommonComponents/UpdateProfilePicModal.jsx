import React, { useState, useContext } from 'react';
import AuthContext from '../AuthProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PortraitIcon from '@mui/icons-material/Portrait';
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function UpdateProfileModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { user, setUser } = useContext(AuthContext)
  const [avatar, setAvatar] = useState(null)
  const [error, setError] = useState('')
 
  const handleChangeProfilePic = (e) => {
    e.preventDefault()
    const formData = new FormData()
      formData.append('avatar', avatar) 
    
    fetch(`/users/${user.id}`,{
      method: "PATCH",
      body: formData
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(data => {
          setOpen(false)
          setError('')
          setUser(data)
        })
      }else {
          setError('Please try again')
      }
    })
  }

  return (
    <div>
<       ListItem key="Update Profile Pic" disablePadding >
            <ListItemButton onClick={handleOpen}>
            <ListItemIcon>
                <PortraitIcon/>
            </ListItemIcon >
            <ListItemText primary="Update Profile Pic" />
            </ListItemButton>
        </ListItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Profile Pic
          </Typography>
          <p style={{color: 'red', textAlign:'center'}}>{error ? error : null}</p>
          <form onSubmit={handleChangeProfilePic}>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          <Button 
            variant="contained" 
            type='submit'
            color="success"
            size="small"
            style={{marginTop:'10px'}}
            >
            Submit</Button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}

export default UpdateProfileModal