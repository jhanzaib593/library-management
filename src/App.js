import "./App.css";
import Header from "./commpunter/Header";
import { ConfigProvider } from "antd";
import Login from "./pages/login";
import Signin from "./pages/signin";

function App() {
  return (
    <div className="wappers">
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <Header />
        <Signin />

      </ConfigProvider>
    </div>
  );
}

export default App;
