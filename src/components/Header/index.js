import './style.css';
import logo from '../../assets/logos/logo.svg';

//Title
const title = '';
// Menu items
const menuItems = [
  {
    name: 'Home',
    url: '#Home',
  },
  {
    name: 'About',
    url: '#About',
  },
];

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        {/*Logo*/}
        <div className="header-logo-container">
          <a className="logo-link" href="#Home">
            <img className="header-logo" src={logo} alt="logo.svg" />
            <span>{title}</span>
          </a>
        </div>

        {/*Menu toggle button*/}
        {/* <div></div> */}
        {/*Menu items*/}
        <nav className="header-nav">
          <ul className="header-ul">
            {menuItems.map((menu, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={menu.url}>
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
