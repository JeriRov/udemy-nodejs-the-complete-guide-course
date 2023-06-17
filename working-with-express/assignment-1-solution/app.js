const express = require('express');

const app = express();

app.listen(3000)

/*
app.use((req, res, next) => {
    console.log('In the first middleware!');
    next();
})

app.use((req, res, next) => {
    console.log('In the second middleware!');
    res.send('<h1>Item 2 in the task is completed!</h1>');
})
*/

app.use('/users', (req, res, next) => {
    console.log('Middleware only for "/users" !');
    res.send('<h1>Middleware only for "/users" !</h1>');
})


app.use('/', (req, res, next) => {
    console.log('Middleware only for "/" !');
    res.send('<h1>Middleware only for "/" !</h1>');
})
