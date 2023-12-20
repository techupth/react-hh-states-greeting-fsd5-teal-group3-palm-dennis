import { useState } from "react";
import "./App.css";
import Button from "./assets/components/Button";
function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  function HandleClick(e) {
    setGreetingMessage(e.target.value);
  }
  const obj = [
    {
      name: "สวัสดี!",
    },
    {
      name: "Hi!",
    },
    {
      name: "你好!",
    },
  ];

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        {obj.map(({ name }) => {
          return <Button key={name} name={name} onClick={HandleClick} />;
        })}
      </div>
    </div>
  );
}

export default App;
