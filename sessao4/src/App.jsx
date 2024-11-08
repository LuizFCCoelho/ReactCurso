import "./App.css";
import MyComponent from "./components/myComponent";
import Title from "./components/Title";

function App() {
  const x = 10;
  const y = 10;

  return (
    <>
      <h1>inicio</h1>
      {/* CSS vaza do componente, necesario usar classe ou id pra ficar correto */}
      <MyComponent />
      {/* evitar inline */}
      <p style={{ color: "blue", padding: "10px", borderTop: "2px Solid red" }}>
        Inline CSS
      </p>
      {/* inline dinamica */}
      <p style={x < 15 ? { color: "green" } : { color: "pink" }}>
        Inline dinamico
      </p>
      {/* Classe dinamica */}
      <p className={y < 15 ? "blue" : "grey"}>classe dinamica</p>
      {/* css module, importa no componente para que náo vaze */}
      <p>css modules</p>
      <Title />
    </>
  );
}

export default App;
