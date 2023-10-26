import SideBarStyles from './SideBar.module.css';
import SideBarTitle from '../SideBarTitle/SideBarTitle';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import FeedList from '../FeedList/FeedList';


function SideBar({apikey}) {

    return (
        <div className={SideBarStyles.container}>
            <SideBarTitle />
            <SideBarMenu />
            <FeedList apikey={apikey}/>
        </div>
    )
}

export default SideBar