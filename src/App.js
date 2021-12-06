import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/api/videoslist", {
      // method: "GET",
      // mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        alert(data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="App">
      <div className="video-playlist"></div>
    </div>
  );
}

export default App;
