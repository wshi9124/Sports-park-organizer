import React, {useState, useContext} from "react";
import AuthContext from "../AuthProvider";
import NavBar from "../CommonComponents/NavBar";
import Event from "./Event";
import LogoutButton from "../CommonComponents/LogoutButton";



function HomePage() {
    const { user } = useContext(AuthContext)
    
    const [events, setEvents] = useState([]);
    return(
        <div>
        <NavBar/>
        <Event/>
        <LogoutButton/>
        <p>{user.username}</p>
        <img src={user.avatar_url} style={{width:"200px"}}/>
        </div>
  );
}
export default HomePage