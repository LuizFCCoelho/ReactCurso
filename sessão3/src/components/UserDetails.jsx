const UserDetails = ({ id, nome, idade, sexo }) => {
  return (
    <div>
      <div>
        <h1>Pessoas</h1>
      </div>
      <div>
        <ul>
          <li>id: {id}</li>
          <li>Nome: {nome}</li>
          <li>idade: {idade}</li>
          <li>sexo: {sexo}</li>
        </ul>
        <>
          {idade >= 18 ? (
            <p>Pode tirar carteira</p>
          ) : (
            <p>Não pode tirar carteira</p>
          )}
        </>
      </div>
    </div>
  );
};

export default UserDetails;
