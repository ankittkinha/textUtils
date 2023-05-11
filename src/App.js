import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#040436";
      setMode("dark");
      showAlert("Dark mode has been enabled", "success")
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode has been enabled", "success")
    }
  };

  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
