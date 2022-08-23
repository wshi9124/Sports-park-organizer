import React, {useState} from "react";
import NavBar from "../Common Componenets/NavBar";
import Event from "./Event";



function HomePage() {

    const [events, setEvents] = useState([]);
    return(
        <div>
        <NavBar/>
        <Event/>
        </div>
  );
}
export default HomePage