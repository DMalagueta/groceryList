/*
1 - esconder o form, e deixar visivel somente o botao NewItem
2 - Ao clicar no botao NewItem mostrar o form e esconder o botao
3 - escrevendo um novo produto e clicando no boto "Add", acrescentar novo item á lista, voltar a esconder o form e mostrar botao NovoItem
4 - ao clicar num item, verificar se tem a class 'complete', se tiver eliminar o item, senao aplicar a class complete, e mover para o final da lista
5 - apresentar no H2, inserindo dentro de uma tag <span> o numero de items por comprar
*/


// 1 - esconder form
let form = document.querySelector('form');
form.setAttribute('style', 'display:none');

// 2 - Click no buttao newitem
let showForm = document.getElementById('showForm');
let newItem = document.getElementById('newItemButton');

showForm.addEventListener('click', () => {
    newItem.setAttribute('style', 'display:none');
    form.removeAttribute('style','display:none');
}, false);

// 3 - Add
let addButton = document.querySelector('#addButton');
let description = document.getElementById('itemDescription');

addButton.addEventListener('click', addEvent, false)
let ul = document.querySelector('ul');
function addEvent(e){
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = description.value;
    ul.appendChild(li);
    form.setAttribute('style', 'display:none');
    newItem.removeAttribute('style', 'display:none');
    description.value = '';
    nrItems();
};

// 4 - verificar class complete e adicionar caso nao tenha
let items = document.querySelectorAll('li');

for (const item of items) {
    item.addEventListener('click', () => {
        if (item.classList.contains('complete')){
            item.remove();
            nrItems();
        } else{
            item.classList.add('complete');
        }
    }, false);
}

function removeItem() {}

// 5 - apresentar o numero de items no h2 
let span = document.createElement('span');
let h2 = document.querySelector('h2');

function nrItems(){
    span.textContent=ul.childElementCount;
    h2.appendChild(span);
}

nrItems();

