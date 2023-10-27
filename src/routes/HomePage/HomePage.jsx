import { useState } from "react";
import SecondaryPage from "../../components/SecondaryPage/SecondaryPage"
import SideBar from "../../components/SideBar/SideBar"
import { useLocation } from "react-router-dom";


function HomePage(){
    const location = useLocation();
    const user = location.state.user;
    const [selectedFeedId, setSelectedFeedId] = useState(null);
    const apikey = user["apikey"]
    const username = user["username"]
    return(
        <>
        <SideBar apikey={apikey} setSelectedFeedId={setSelectedFeedId}/>
        <SecondaryPage apikey={apikey} username={username} selectedFeedId={selectedFeedId}/>
        </>
    )
}

export default HomePage