import rssicon from '../../assets/rssicon.png';
import HeaderStyle from './Header.module.css';

function Header({username}) {
  
  return (
    <div className={HeaderStyle.container}>
        <img src={rssicon} alt="rss icon" className={HeaderStyle.image}/>
      <h2 className={HeaderStyle.title}>rss feed aggregator</h2>
      <h2 className={HeaderStyle.username}>{username}</h2>
    </div>
  );
}

export default Header;