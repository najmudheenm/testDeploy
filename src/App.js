import React, { useState } from "react";
import axios from 'axios'
import "./App.css";
import Phone from "./Phone";

const App = () => {
  const [token, setToken] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  axios.post('https://4836-117-198-167-223.ngrok-free.app/api/1.0/voip/token',{
      identity: "test"
    }).then(response=>{
      console.log(response.data.token);
      setToken(response.data.token)
    })

    // fetch("/token",requestOptions)
    //   .then((response) => response.json())
    //   .then(({ token }) => setToken(token));
  };

  return (
    <div className="app">
      <header className="App-header">
        <h1>Freston app</h1>
      </header>

      <main>
        {!clicked && <button onClick={handleClick}>Connect to Phone</button>}

        {token ? <Phone token={token}></Phone> : <p>Loading...</p>}
      </main>

      <footer>
        <p>Built on Twitch by Najmudheen</p>
      </footer>
    </div>
  );
};

export default App;
