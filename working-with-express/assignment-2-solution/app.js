const express = require('express')
const usersRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)
app.use(usersRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

console.log("App is ready and listen port 3000!")
app.listen(3000);
