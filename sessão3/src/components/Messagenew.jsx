import React from "react";

function Messagenew({ handleMessage }) {
  const options = ["msg1", "msg2", "msg"];
  return (
    <div>
      <button onClick={() => handleMessage(options[0])}>1</button>
      <button onClick={() => handleMessage(options[1])}>2</button>
      <button onClick={() => handleMessage(options[2])}>3</button>
    </div>
  );
}

export default Messagenew;
