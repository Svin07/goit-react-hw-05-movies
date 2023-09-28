import Header from 'components/Header/Header';
const { Outlet } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
