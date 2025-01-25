//capturar elementos del DOM
let inputNombre = document.getElementById("amigo");
let arrayAmigos = [];
const $litaAmigos = document.getElementById("listaAmigos");
const $resultado = document.getElementById("resultado");
//Funcion para agregar amigos al array
function agregarAmigo() {
  if (inputNombre.value === "") {
    alert("Debes ingresar un nombre");
    return;
  }
  arrayAmigos.push(inputNombre.value);
  console.log(arrayAmigos);
  inputNombre.value = "";
  inputNombre.focus();
  $litaAmigos.innerHTML = `<li>${arrayAmigos}</li>`;
  return arrayAmigos;
}

//funcion para sortear amigo secreto
function sortearAmigoSecreto() {
  let amigoSecreto = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
  console.log(amigoSecreto);
  $resultado.innerHTML = `<li>${amigoSecreto}</li>`;
  return amigoSecreto;
}
