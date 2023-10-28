import Login from "./Login";
import Home from "./Books";

const home = ()=>{
    const user = {
        name:"jhanzaib",
        email:"jhanzaib593@gmail.com"
    }
    return (
        <div>
            {
                user ? <Home/> : <Login/>
            }
        </div>
        );
};

export default home