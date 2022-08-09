import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url)
    .then(response => {
        const todo = response.data;

        const id = todo.id;
        const title = todo.title;
        const finished = todo.finished;

        console.log(`
The Todo with id: ${id}
Has a title of: ${title}
Is it finished? ${finished}
        `);
    });
