import "./App.css";
import Header from "./commpunter/Header";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#00b96b" } }}>
        <Header />
      </ConfigProvider>
    </>
  );
}

export default App;
