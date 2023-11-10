import SideBarMenuStyles from './SideBarMenu.module.css';

function SideBarMenu( { setFeedsNotFollowedView }) {

    function handleClick() {
        setFeedsNotFollowedView(true);
    }

    return (
        <div className={SideBarMenuStyles.container}>
            
            <div className={SideBarMenuStyles.item}>
                <button onClick={handleClick}>
                <div className={SideBarMenuStyles.title}>
                    Follow Feeds
                </div>
                </button>
            </div>
            
          
            
        </div>
    )
}

export default SideBarMenu;