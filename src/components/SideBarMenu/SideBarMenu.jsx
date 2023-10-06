import SideBarMenuStyles from './SideBarMenu.module.css';

function SideBarMenu() {

    return (
        <div className={SideBarMenuStyles.container}>
            <div className={SideBarMenuStyles.item}>

                <div className={SideBarMenuStyles.title}>
                    All
                </div>
            </div>
            <div className={SideBarMenuStyles.item}>

                <div className={SideBarMenuStyles.title}>
                    Starred
                </div>
            </div>
            <div className={SideBarMenuStyles.item}>

                <div className={SideBarMenuStyles.title}>
                    Unread
                </div>
            </div>
            
        </div>
    )
}

export default SideBarMenu;