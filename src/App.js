import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
   
    if (time && !isActive) {
      setIsActive(true);
      setCountdown(parseInt(time)); 
    }
  };

  useEffect(() => {
    let timer;
    if (isActive && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsActive(false);
      clearInterval(timer);
    }

    return () => clearInterval(timer); 
  }, [isActive, countdown]);

  return (
    <div>
      <h1>Timer: {countdown !== null ? countdown : time}</h1>
      <input
        type="input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time in seconds"
      />
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default App;
