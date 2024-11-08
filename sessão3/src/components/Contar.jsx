import { useState } from "react";

const Contar = () => {
  const [Valor, setValor] = useState(0);

  return (
    <div>
      <h1>valor = {Valor}</h1>
      <button
        onClick={() => {
          setValor(Valor + 1);
        }}
      >
        Aumenta contador
      </button>
      <button
        onClick={() => {
          setValor(0);
        }}
      >
        Zerar
      </button>
    </div>
  );
};

export default Contar;
