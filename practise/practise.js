function comment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    const ul = document.getElementById('common-li');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Eamil: ${user.email}, Name: ${user.name}, id: ${user.id}`;
        ul.appendChild(li);
    }
}

function photos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayComment(data))
}

function displayComment(data) {
    const ul = document.getElementById('common-li');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = `
        <a href="${user.thumbnailUrl}">${user.url}</a>
        `;
        ul.appendChild(li);
    }
}

function todos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
}

function displayTodos(data) {
    const ul = document.getElementById('common-li');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Title: ${user.title}`
        ul.appendChild(li);
    }
};
