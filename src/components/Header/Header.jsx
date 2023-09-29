import rssicon from '../../assets/rssicon.png';
import HeaderStyle from './Header.module.css';

function Header() {
  return (
    <div className={HeaderStyle.container}>
        <img src={rssicon} alt="rss icon" className={HeaderStyle.image}/>
      <h2 className={HeaderStyle.title}>rss feed aggregator</h2>
    </div>
  );
}

export default Header;