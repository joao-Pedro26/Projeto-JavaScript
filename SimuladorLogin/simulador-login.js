function simularLogin(usuario, senha) {
  return new Promise((resolver, rejeitar) => {
    setTimeout(() => {
      if (usuario === "admin" && senha === "123456") {
        resolver("Login realizado com sucesso!");
      } else {
        rejeitar("Usuário e/ou senha inválidos.");
      }
    }, 3000);
  });
}

document.getElementById("botaoLogin").addEventListener("click", () => {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const mensagem = document.getElementById("mensagem");

  mensagem.textContent = "Verificando login...";
  mensagem.style.color = "orange";

  simularLogin(usuario, senha)
    .then((sucesso) => {
      mensagem.textContent = sucesso;
      mensagem.style.color = "green";
    })
    .catch((erro) => {
      mensagem.textContent = erro;
      mensagem.style.color = "red";
    });
});
