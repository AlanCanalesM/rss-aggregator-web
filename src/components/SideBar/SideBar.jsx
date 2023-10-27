import SideBarStyles from './SideBar.module.css';
import SideBarTitle from '../SideBarTitle/SideBarTitle';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import FeedList from '../FeedList/FeedList';


function SideBar({apikey, setSelectedFeedId}) {

    return (
        <div className={SideBarStyles.container}>
            <SideBarTitle />
            <SideBarMenu />
            <FeedList apikey={apikey} setSelectedFeedId={setSelectedFeedId}/>
        </div>
    )
}

export default SideBar