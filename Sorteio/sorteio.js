function sorteio() {
    return new Promise((resolver, rejeitar) => {
        setTimeout(() => {
            let numero = Math.floor(Math.random() * 10) + 1
            if (numero > 5) {
                resolver("Você ganhou! Número sorteado: " + numero)
            } else {
                rejeitar("Tente novamente. Número: " + numero)
            }
        }, 1000)
    })
}

async function iniciarSorteio() {
    let saida = document.getElementById("mensagem")
    saida.textContent = "Sorteando..."
    while (true) {
        try {
            let resposta = await sorteio()
            saida.textContent = resposta
            break
        } catch (erro) {
            saida.textContent = erro
        }
    }
}

document.getElementById("botao").addEventListener("click", iniciarSorteio)
