function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const etapasPedido = [
  "Pedido feito pelo cliente",
  "Pedido aceito pela loja",
  "Preparando o pedido",
  "Pedido saiu para entrega",
  "Pedido entregue com sucesso"
];

async function simularPedido() {
  const listaEtapas = document.getElementById("etapas");
  listaEtapas.innerHTML = "";

  for (let i = 0; i < etapasPedido.length; i++) {
    const item = document.createElement("li");
    item.textContent = etapasPedido[i];
    item.classList.add("andamento");
    listaEtapas.appendChild(item);

    let tempoEtapa;
    switch (i) {
      case 0: tempoEtapa = 1000; break;
      case 1: tempoEtapa = 2000; break;
      case 2: tempoEtapa = 4000; break;
      case 3: tempoEtapa = 3000; break;
      case 4: tempoEtapa = 1000; break;
    }

    await esperar(tempoEtapa);
    item.classList.remove("andamento");
    item.classList.add("concluida");
  }
}

document.getElementById("botaoPedido").addEventListener("click", simularPedido);
