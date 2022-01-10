
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import MainNavbar from './Components/MainNavBar';



const MainLayout = ({ children }) => {


  return (
    <>
      <MainNavbar/>
      {children || <Outlet />}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
