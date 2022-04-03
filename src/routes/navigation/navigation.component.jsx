import { Outlet, Link } from "react-router-dom"; //Link acts as anchor tag
import { Fragment } from "react"; //Fragment replaces outermost div and removed unusable div

import './navigation.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
         <CrownLogo className="Logo"/> 
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
