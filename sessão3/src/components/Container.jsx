const Container = ({ children }) => {
  return (
    <div>
      <h1>Titulo do container</h1>
      {children}
      {/* aqui que chama o texto filho */}
    </div>
  );
};

export default Container;
