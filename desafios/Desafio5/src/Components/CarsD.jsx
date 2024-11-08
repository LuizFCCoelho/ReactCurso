import styles from "./CarsD.module.css";

const CarsD = ({ Modelo, Marca, Ano }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Foto}>
        <img src="./car.jpeg" alt="carro" />
      </div>
      <div className={styles.Info}>
        <ul>
          <li>Modelo: {Modelo}</li>
          <li>Marca: {Marca}</li>
          <li>Ano: {Ano}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarsD;
