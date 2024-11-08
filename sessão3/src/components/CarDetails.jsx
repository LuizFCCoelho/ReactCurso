const CarDetails = ({ marca, km, cor, NewCar }) => {
  return (
    <div>
      <h1>Detalhes do carro</h1>
      <ul>
        <li>marca: {marca}</li>
        <li>km: {km}</li>
        <li>cor: {cor}</li>
      </ul>
      {NewCar ? <h1>Novo</h1> : <h1>Usado</h1>}
    </div>
  );
};

export default CarDetails;
