const TemplatesExpressions = () => {
  const Name = "Luiz";
  const Pess = {
    Age: 25,
    Job: "Suporte",
  };

  return (
    <div>
      <h1>Ola {Name}</h1>
      <p>Seu trabalho é {Pess.Job}?</p>
      <p>4 + 4 é ? </p>
      <p>{4 + 4}</p>
      <p>{console.log("teste console log")}</p>
    </div>
  );
};

export default TemplatesExpressions;
