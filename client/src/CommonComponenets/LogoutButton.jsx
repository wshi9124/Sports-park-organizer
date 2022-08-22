import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../AuthProvider"
import Button from '@mui/material/Button'


function LogoutButton() {
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        fetch('/logout', {method: 'DELETE'})
        setUser({})
        navigate('/login')
      }

    return(
        <Button onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutButton