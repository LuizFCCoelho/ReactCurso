import React, { useState } from "react";

const ListRender = () => {
  const [Users, setUsers] = useState([
    { id: 1, name: "Luiz", Age: 25 },
    { id: 2, name: "Kleber", Age: 23 },
    { id: 3, name: "Lucas", Age: 34 },
    { id: 4, name: "Tonho", Age: 43 },
  ]);

  const DelUser = () => {
    const IdRandom = Math.floor(Math.random() * 5);
    //se deixar o nome abaixo inves de prevusers só users, funciona mas o prev é convençao
    setUsers((prevUsers) => {
      return prevUsers.filter((Users) => IdRandom !== Users.id);
    });
  };

  return (
    <div>
      <h1>ListRender</h1>
      <div>
        <ul>
          {Users.map((pess) => (
            <li key={pess.id}>
              {pess.name} - {pess.Age}
            </li>
          ))}
        </ul>
        <button onClick={DelUser}>deleta usuário</button>
      </div>
    </div>
  );
};

export default ListRender;
