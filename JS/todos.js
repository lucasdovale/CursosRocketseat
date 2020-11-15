var lista = document.querySelector('#app ul');
var input = document.querySelector('#app input');
var botao = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || []; 

function renderTodos() {
    lista.innerHTML = '';

    for (todo of todos) {
        console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onClick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        lista.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = input.value;

    todos.push(todoText);
    input.value = '';
    renderTodos();
    saveToStorage();
}

botao.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('lista_todos', JSON.stringify(todos));
}