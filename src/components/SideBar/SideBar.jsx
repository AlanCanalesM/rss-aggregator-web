import SideBarStyles from './SideBar.module.css';
import SideBarTitle from '../SideBarTitle/SideBarTitle';

function SideBar() {

    return (
        <div className={SideBarStyles.container}>
            <SideBarTitle />
        </div> 
    ) 
}

export default SideBar