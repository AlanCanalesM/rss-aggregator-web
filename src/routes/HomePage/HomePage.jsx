import { useState } from "react";
import SecondaryPage from "../../components/SecondaryPage/SecondaryPage"
import SideBar from "../../components/SideBar/SideBar"
import { useLocation} from "react-router-dom";


function HomePage(){
    const location = useLocation();
    const user = location.state.user;
    const [selectedFeedId, setSelectedFeedId] = useState(null);
    const [feedsNotFollowedView, setFeedsNotFollowedView] = useState();
    const apikey = user["apikey"]
    const username = user["username"]
    const [aux, setAux] = useState(0);

    function handleFeedClick(feed_id) {
        setSelectedFeedId(feed_id)
        setFeedsNotFollowedView(false);
    }

    return(
        <>
        <SideBar apikey={apikey} setSelectedFeedId={setSelectedFeedId} feedsNotFollowedView={feedsNotFollowedView} setFeedsNotFollowedView={setFeedsNotFollowedView} handleFeedClick={handleFeedClick} aux={aux} setAux={setAux}/>
        <SecondaryPage apikey={apikey} username={username} selectedFeedId={selectedFeedId} feedsNotFollowedView={feedsNotFollowedView} setFeedsNotFollowedView={setFeedsNotFollowedView} aux={aux} setAux={setAux}/>
        </>
    )
}

export default HomePage