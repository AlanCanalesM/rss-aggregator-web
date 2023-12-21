import SideBarStyles from './SideBar.module.css';
import SideBarTitle from '../SideBarTitle/SideBarTitle';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import FeedList from '../FeedList/FeedList';


function SideBar({apikey, setSelectedFeedId, feedsNotFollowedView, setFeedsNotFollowedView, handleFeedClick, aux, setAux}) {

    return (
        <div className={SideBarStyles.container}>
            <SideBarTitle />
            <SideBarMenu  setFeedsNotFollowedView={setFeedsNotFollowedView}/>
            <FeedList apikey={apikey} setSelectedFeedId={setSelectedFeedId} handleFeedClick={handleFeedClick} aux={aux} setAux={setAux}/>
        </div>
    )
}

export default SideBar