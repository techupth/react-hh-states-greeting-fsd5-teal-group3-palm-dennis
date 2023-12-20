import "./App.css";
import { useState } from "react";

function App() {
  const [Message, setMessage] = useState("Greeting Message");
  const th = "สวัสดี!";
  const engligh = "Hi!";
  const chinese = "你好!";
  const x = "1";

  const handleChange = (e) => {
    if (e.target.innerText === engligh) {
      setMessage(engligh);
    } else if (e.target.innerText === chinese) {
      setMessage(chinese);
    } else if (e.target.innerText === th) {
      setMessage(th);
    } else {
      setMessage("Greeting Message");
    }
  };

  return (
    <div className="App">
      <div className="greeting-container">{Message}</div>
      <div className="buttons">
        <button onClick={handleChange}>{th}</button>
        <button onClick={handleChange}>{engligh}</button>
        <button onClick={handleChange}>{chinese}</button>
        <button onClick={handleChange}>reset</button>
      </div>
    </div>
  );
}

export default App;
