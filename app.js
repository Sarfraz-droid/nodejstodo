const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const Todos = [
    {
        id: 1,
        title: 'Learn Node.js',
    },
    {
        id: 2,
        title: 'Study MySQL'
    },
    {
        id: 3,
        title: 'Dont Study'
    }
];

app.get('/', (req, res) => {
    const data = {
        title: 'Home',
        message: 'Todo App',
        todos: Todos
    }
    res.render('index', data);
});

app.post('/addtodo', (req, res) => {
    console.log(req.body);
    const mytodo = req.body.todo;
    console.log("Todo I entered : ", mytodo);

    Todos.push({
        id: Todos.length + 1,
        title: mytodo
    });

    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

