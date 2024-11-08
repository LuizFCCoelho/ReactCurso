import React, { useState } from "react";

const Challenge = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [Soma, setSoma] = useState(0);

  const IncrementaA = () => {
    setA(A + 1);
  };

  const IncrementaB = () => {
    setB(B + 1);
  };

  const SomaAB = () => {
    setSoma(A + B);
  };

  return (
    <div>
      <div>
        <button onClick={IncrementaA}>Valor A</button>
        <p>{A}</p>
      </div>
      <div>
        <button onClick={IncrementaB}>Valor B</button>
        <p>{B}</p>
      </div>
      <div>
        <button onClick={SomaAB}>Soma</button>
        <p>Soma = {Soma}</p>
      </div>
    </div>
  );
};

export default Challenge;
