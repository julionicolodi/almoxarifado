document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("idnomecompleto").value;
  const cpf = document.getElementById("cpf").value;
  const setor = document.getElementById("idsetordaempresa").value;
  const ferramenta = document.getElementById("idqualeaferramenta").value;
  const numeroFerramenta = document.getElementById("idn°ferramenta").value;
  const obra = document.getElementById("idParaqualobraseráusada").value;

  const mensagem = `Eu, ${nomeCompleto}, CPF: ${cpf}, colaborador do setor ${setor}, declaro que retirei a seguinte ferramenta sob minha responsabilidade:

Ferramenta: ${ferramenta}
Número de Identificação: ${numeroFerramenta}
Finalidade: Uso na obra "${obra}"

Comprometo-me a conservar o material e devolvê-lo nas condições adequadas, conforme as normas do almoxarifado.

Data da Retirada: ____/____/________
Assinatura do Colaborador: ____________________`;

  document.getElementById("comprovante").innerText = mensagem;
  document.getElementById("btn-xerox").style.display = "block";
});

function imprimirComprovante() {
  window.print();
}

