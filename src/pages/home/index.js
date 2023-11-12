import Login from "./Login";
import Home from "./Books";
import { useSelector } from "react-redux";
// import Navbarheader from "../../commpunter/Navbar/";


const Homepage = ()=>{
    const user = useSelector((s)=>s.user);
    return (
        <div>
            {
                user ? <Home/> : <Login/>
            }
        </div>
        );
};

export default Homepage