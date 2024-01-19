const express = require('express');
const cors = require('cors');
const Todo = require('../Model/Todo');
const app = express();

app.use(cors());
app.use(express.json());

const getTodos = (req, res) => {
    res.send("I am the get todos route");
};

const createTodo = async (req, res) => {
    console.log('Request Body:', req.body);

    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
        });

        const savedTodo = await todo.save();
        console.log('Todo saved successfully:', savedTodo);
        res.json(savedTodo);
    } catch (err) {
        console.error('Error saving todo:', err);
        res.status(500).send(err);
    }
};

app.post('/todos', createTodo);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});