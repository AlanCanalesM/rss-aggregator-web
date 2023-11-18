import SideBarTitleStyle from './SideBarTitle.module.css';
import menuicon from '../../assets/menu.png';

function SideBarTitle(){
    return (
        <div className={SideBarTitleStyle.container}>
        <h2 className={SideBarTitleStyle.title}>RSS by Alan</h2>
        <img src={menuicon} alt='icon' className={SideBarTitleStyle.icon}/>
        </div>
    )
}

export default SideBarTitle;