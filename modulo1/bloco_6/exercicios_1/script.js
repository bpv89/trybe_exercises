const botaoEnviar = document.querySelector("#botaoEnviar");
const botaoLimpar = document.querySelector("#botaoLimpar");
const formulario = document.querySelector("#formulario");

botaoEnviar.addEventListener("click", (e) => {
  e.preventDefault();
});

botaoLimpar.addEventListener("click", () => {
  formulario.reset();
});
