const express = require('express')
const app = express()
const port = 3000

app.listen(port, () =>
    console.log(`Server listening on port ${port}!`)
);

function myMiddleware (req, res, next) {
    setTimeout(function() {
            next()
        }
    ,5000)
}

//app.use(myMiddleware)

app.get('/a', (req, res) =>{
    res.send('Hello')
});


