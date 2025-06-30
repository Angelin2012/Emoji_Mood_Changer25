import './App.css';
import MoodDisplay from './MoodDisplay';
import React,{ useState } from "react"
function App() {
  const[mood,setMood] = useState("");
  return (
    <div className="container">
      <h1>How are you feeling today?</h1>
      <div className="buttons">
        
        <button className="btn happy"onClick={() => setMood ("happy")}>
          😃 Happy
        </button>
        <button className="btn sad"onClick={() => setMood ("sad")}>
          😔 Sad
        </button>
        <button className="btn Excited"onClick={() => setMood ("excited")}>
          😄 Excited
        </button>
        <button className="btn angry"onClick={() => setMood ("angry")}>
          😡 Angry
        </button>

      </div>
      <MoodDisplay value={mood} />

    </div>
    
  );
}

export default App;
