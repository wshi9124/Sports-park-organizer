import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../AuthProvider"
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function LogoutButton() {
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser({})
        navigate('/login')
      }

    return(
        <ListItem key="logout" disablePadding>
        <ListItemButton onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon/>
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItemButton>
      </ListItem>
    )
}

export default LogoutButton