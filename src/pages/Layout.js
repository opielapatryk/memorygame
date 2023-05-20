import {Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <Link to="/play">Play</Link><br></br>
        <Link to="/chooselvl">Choose Level</Link><br></br>
        <Outlet/>
        </>
    );
  };
  

export default Layout;

