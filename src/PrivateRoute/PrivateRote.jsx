import { useContext } from "react"
import { AuthContext } from "../AuthContext/AuthContext"
import { Navigate } from "react-router-dom"
function PrivateRoute(props) {
    const {auth}=useContext(AuthContext)
    if(!auth){
        return (
            <Navigate to="/login"/>
        )
    }
    return (
        props.children
    )
}

export default PrivateRoute