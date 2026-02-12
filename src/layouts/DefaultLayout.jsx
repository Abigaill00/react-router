import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";

function DefaultLayout() {
    return <>
            <Navbar /> {/* Navbar presente in tutte le pagine */}
            <Outlet />
   </>
}

export default DefaultLayout;