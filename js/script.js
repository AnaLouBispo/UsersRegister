// Buscando elementos para realizar o evento
const nome = document.querySelector("#nome");
const button = document.querySelector(".button");
const lista = document.querySelector(".lista");
const telefone = document.querySelector("#telephone");
const email = document.querySelector("#email");

// Evento de criação do container do user
button.addEventListener("click", (event) => {
  event.preventDefault();

  // Capturando os valores dos campos
  const inputNameValue = nome.value;
  const inputEmailValue = email.value;
  const inputTelefoneValue = telefone.value;

  // Verificação dos campos
  if (
    inputNameValue === "" ||
    inputEmailValue === "" ||
    inputTelefoneValue === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  // Criando um container para armazenar as informações dos users
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `
      <ul>
        <li>Nome: ${inputNameValue}</li>
        <li>Email: ${inputEmailValue}</li>
        <li>Telefone: ${inputTelefoneValue}</li>
      </ul>
      <button class="button-delete">Delete</button>
      <hr/>
  `;

  // Adicionando o container do user a lista de usuários
  lista.appendChild(userDiv);

  // Criando um evento para remover o container do user quando o botão "delete" for clicado
  const deleteBtn = userDiv.querySelector(".button-delete");
  deleteBtn.addEventListener("click", function () {
    userDiv.remove();
  });
});
