const express = require('express');
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users')
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: 'views/layout/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(mainRouter);
app.use(usersRouter);
app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
