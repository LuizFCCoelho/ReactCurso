const Events = () => {
  const HandleMyEvent = (e) => {
    //HandleMyEvent(e)
    //console.log(e) o "e" é de eventos e da para pegar as propriedades do evento
    console.log("ativou o evento");
    //console.log(e);
  };

  return (
    // Se colocar o com parenteses a chamada a funçao ela executa uam vez ao abrir a pagina, se deixa sem, vai funcionar só no on click
    // HandleMyEvent()  >>>>  HandleMyEvent
    <div>
      <div>
        <button onClick={HandleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou")}>clique aqui 2</button>
      </div>
      {/* <div>
        <button
          onClick={() => {
            if (true) {
              console.log("nao fazer assim");
            }
          }}
        >
          náo fazer assim, com bloco de codigo no botão
        </button>
      </div> */}
    </div>
  );
};

export default Events;
