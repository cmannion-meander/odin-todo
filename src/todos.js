export default function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    return todo;
};