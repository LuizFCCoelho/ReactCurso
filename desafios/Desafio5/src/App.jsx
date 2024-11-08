import "./App.css";
import CarsD from "./Components/CarsD";

function App() {
  const Cars = [
    { id: 1, Modelo: "Gol", Marca: "VW", Ano: "2005" },
    { id: 2, Modelo: "Corsa", Marca: "GM", Ano: "2009" },
    { id: 3, Modelo: "Kwid", Marca: "Renault", Ano: "2018" },
  ];

  return (
    <>
      <div className="Header">
        <h1>Desafio 5 - Carros</h1>
      </div>
      <div>
        <div className="Conteudo">
          {Cars.map((car) => (
            <CarsD
              id={car.id}
              Modelo={car.Modelo}
              Marca={car.Marca}
              Ano={car.Ano}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
