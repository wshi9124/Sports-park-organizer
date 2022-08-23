<<<<<<< HEAD
import React, {useState} from "react";
import NavBar from "../Common Componenets/NavBar";
import Event from "./Event";



function HomePage() {
=======
import React from "react";
import LogoutButton from "../CommonComponenets/LogoutButton";

function HomePage() {
    // if(!user.id)
    return(
        <div>
        <h1>Hi</h1>
        <LogoutButton />
        </div>
    )
}
>>>>>>> c6ccfbc8705ca32b8444a45031d5f35867fce3d7

    const [events, setEvents] = useState([]);
    return(
        <div>
        <NavBar/>
        <Event/>
        </div>
  );
}
export default HomePage