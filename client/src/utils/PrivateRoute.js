import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthProvider";

const PrivateRoutes = () => {
    const { user } = useContext(AuthContext)
        let auth= user?.id
    return(
        auth? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes 