//variaveis dos elementos da lista


//Atribuindo o formulario a uam váriavel
const form = document. getElementById('addForm');
//Atribuir a lista a uma variavel
const itemlist = document.getElementById('items');
//Atribução da barra de pesquisa
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);

function removeItem(){
    alert('Clicou na Ul');}
function addItem(){
  //  alert('Você cliclou')
}
filter.addEventListener('keyup',buscarItems);
function buscarItems(){
    alert('Tecla ativa');
}