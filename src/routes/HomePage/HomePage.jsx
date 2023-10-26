import SecondaryPage from "../../components/SecondaryPage/SecondaryPage"
import SideBar from "../../components/SideBar/SideBar"
import { useLocation } from "react-router-dom";

function HomePage(){
    const location = useLocation();
    const user = location.state.user;
    const apikey = user["apikey"]
    const username = user["username"]
    return(
        <>
        <SideBar apikey={apikey} />
        <SecondaryPage apikey={apikey} username={username}/>
        </>
    )
}

export default HomePage