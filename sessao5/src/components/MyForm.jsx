import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // controlando inputs aula 6 se tem user, já vem o default preenchido
  const [email, setEmail] = useState(user ? user.email : "");

  // pegando state do input aula 3
  const [name, setName] = useState(user ? user.name : "");
  const Mudanome = (e) => {
    // console.log(e);
    setName(e.target.value);
  };
  //   console.log(name);

  const EnviaForm = (e) => {
    e.preventDefault();
    console.log(name, email, obs, select);

    // aula 7,zera o formulario
    setEmail("");
    setName("");
    setObs("");
    setSelect("");
  };

  const [obs, setObs] = useState("");
  const [select, setSelect] = useState(user ? user.select : "");

  return (
    <div>
      <h1>criando formulario</h1>
      {/* aula 5, envio do form */}
      <form onSubmit={EnviaForm}>
        <div>
          <label htmlFor="name">Nome</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="digite seu nome"
            onChange={Mudanome}
            value={name}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
      <form>
        {/* aula 2 lable envolvendo o input, mais simples*/}
        <label>
          <span>E-mail</span>
          {/* pega o state inline aula 4 */}
          <input
            type="email"
            name="email"
            placeholder="digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* aula 8, textarea, funciona com mesmos atributos de input */}
        <label>
          <span>Text Area</span>
          <textarea
            name="obs"
            placeholder="observaçoes"
            onChange={(e) => setObs(e.target.value)}
            value={obs}
          ></textarea>
        </label>
        <label>
          {/* aula 9, select, mesma coisa que input tambem*/}
          <span>Select</span>
          <select
            name="select"
            onChange={(e) => setSelect(e.target.value)}
            value={select}
          >
            <option value="user">user</option>
            <option value="adm">adm</option>
            <option value="edit">edit</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default MyForm;
