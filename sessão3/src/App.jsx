import { Children, useState } from "react";
import "./App.css";

//imagem em assets
import city from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";

//components
import Contar from "./components/Contar";
import Fragments from "./components/Fragments";
import ListRender from "./components/ListRender";
import ShowUserName from "./components/ShowUserName";
import Container from "./components/container";
import FunMessage from "./components/FunMessage";
import Messagenew from "./components/Messagenew";
import Message from "./components/Message";
import UserDetails from "./components/UserDetails";

function App() {
  const Cars = [
    { id: 1, marca: "ferrari", km: "219", cor: "azul", NewCar: false },
    { id: 2, marca: "Kia", km: "0", cor: "azul", NewCar: true },
    { id: 3, marca: "ford", km: "30192", cor: "azul", NewCar: false },
  ];

  const Pess = [
    { id: 1, nome: "Luiz", idade: 25, sexo: "M" },
    { id: 2, nome: "Joao", idade: 16, sexo: "M" },
    { id: 3, nome: "José", idade: 43, sexo: "M" },
    { id: 4, nome: "Julio", idade: 34, sexo: "M" },
  ];

  function ShowMessage() {
    console.log("teste funçao");
  }

  const [message1, setMessage1] = useState("nada/inicial");

  const handleMessage = (msg) => {
    setMessage1(msg);
  };

  return (
    <div>
      <h1>sessão 3</h1>
      <div>
        {/* imagem em public */}
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        {/* busca img na assets, usa como se fosse uam variavel */}
        <img src={city} className="img2" alt="cidade" />
      </div>
      {/* <div>
        <Contar />
      </div> */}
      {/* <div>
        <ListRender />
      </div> */}
      {/* <div>
        <ConditionalRender />
      </div> */}
      <div>
        {/* props */}
        {/* posso setar o name igual abaixo ou posso criar uma variavel ou um state name que capta um valor do dom ou banco para e fazer name={"VarNome"} na prop abaixo */}
        {/* <ShowUserName name="Luiz" /> */}
      </div>
      <div>
        {/* destructuring */}
        <CarDetails marca="ford" km={25000} cor="Azul" NewCar={false} />
        {/* reaproveitando */}
        <CarDetails marca="volks" km={20000} cor="Vermelho" NewCar={false} />
        <CarDetails marca="volks" km={0} cor="Vermelho" NewCar={true} />
      </div>
      <div>
        {/* loop em arrays */}
        {/* {Cars.map((car) => (
          <CarDetails
            key={car.id}
            marca={car.marca}
            km={car.km}
            cor={car.cor}
            NewCar={car.NewCar}
          />
        ))} */}
        <h1>teste</h1>
      </div>
      <div>
        {/* fragments, quando chamo um componente, nao preciso encapsular na div, posso deixa apenas a tag vazia <> e </> */}
        <Fragments />
        {/* náo cria div pai, fica tudo no body onde foi chamado */}
      </div>
      <div>
        {/* children props */}
        <Container>
          <h1>texto 123</h1>
          <div>
            <div>
              <h2>texto com filho</h2>
            </div>
          </div>
        </Container>
      </div>
      <div>
        {/* funçao chama na prop */}
        <FunMessage func={ShowMessage} />
      </div>
      <div>
        <Message msg={message1} />
        <Messagenew handleMessage={handleMessage} />
      </div>
      <div>
        <h1>desafio 4</h1>
        {Pess.map((pes) => (
          <UserDetails
            id={pes.id}
            nome={pes.nome}
            idade={pes.idade}
            sexo={pes.sexo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
