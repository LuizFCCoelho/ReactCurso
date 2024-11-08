import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [Nome, setNome] = useState("Luiz");

  return (
    <div>
      ConditionalRender
      <h1>teste de exibiçao</h1>
      {/* se x é verdadeiro entáo aparece, se x é false não */}
      {x && <p>verdadeiro</p>}
      {/* se x é falso exibe */}
      {!x && <p>é falso</p>}
      <div>
        {/* if ternario sintaxe "codiçao ? se true : se false"*/}
        <h1>
          {Nome === "Luiz" ? <p>o Nome é Luiz</p> : <p>o Nome é {Nome}</p>}
        </h1>
        <button onClick={() => setNome("Tom")}>troca nome para Tom</button>
      </div>
    </div>
  );
};

export default ConditionalRender;
