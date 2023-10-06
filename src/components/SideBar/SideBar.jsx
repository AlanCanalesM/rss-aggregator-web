import SideBarStyles from './SideBar.module.css';
import SideBarTitle from '../SideBarTitle/SideBarTitle';
import SideBarMenu from '../SideBarMenu/SideBarMenu';
import FeedList from '../FeedList/FeedList';


function SideBar() {

    return (
        <div className={SideBarStyles.container}>
            <SideBarTitle />
            <SideBarMenu />
            <FeedList />
        </div>
    )
}

export default SideBar