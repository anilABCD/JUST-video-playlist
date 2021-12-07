import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  let [files, setFiles] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/api/videoslist", {
      // method: "GET",
      // mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setFiles(data);
        //alert(JSON.stringify(data));
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="App">
      <div className="video-playlist">
        <div>
          {files?.map((d) => {
            //console.log(JSON.stringify(f.fileName));
            return (
              <div class="">
                <h3> {d.directoryName}</h3>
                <ul className="directories">
                  {d.fileNames.map((f) => {
                    return <li> {f} </li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="video">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
