const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () =>
    console.log(`Server listening on port ${port}!`)
);

/*
function myMiddleware (req, res, next) {
    setTimeout(function() {
            next()
        }
    ,5000)
}
*/
//app.use(myMiddleware)

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/a', (req, res) =>{
    res.json({message:'Hello'})
});

app.post('/login', (req, res) =>{
    console.log(`Username received: ${req.body.user} \nPassword received: ${req.body.password} ` );
    res.json({message:'Login data received'})
});

app.post('/register', (req, res) =>{
    console.log(`Username received: ${req.body.user} \nEmail received: ${req.body.email} \nPassword received: ${req.body.password} \nPassword2 received: ${req.body.password2} ` );
    res.json({message:'Register data received'})
});




