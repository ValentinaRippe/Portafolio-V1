import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logoTrazo.png'

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME}>
        <img src={logo} alt="" width='50px' />
      </Link>
    </div>
  );
};

export default Logo;
