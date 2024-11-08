import MyForm from "./components/MyForm.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>sessao 5</h1>
        {/* primeiro formulario */}
        <MyForm
          user={{ name: "Luiz", email: "teste@gmail.com", select: "adm" }}
        />
      </div>
    </>
  );
}

export default App;
