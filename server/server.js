const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

const { Client } = require('@elastic/elasticsearch/index')
const client = new Client({ node: 'http://localhost:9200', log: 'trace'})

/*
client.cluster.health({},function(err,resp,status) {
    console.log("-- Client Health --",resp);
});
*/


async function registerUser({body:{firstName,lastName, email, dateOfBirth, password}}, res) {
    try {
        const existsUser = await client.search({
            index:'users-index',
            body:{
                query: {
                    match: {email:email}
                }
            }
        });

        if(existsUser.body.hits.total.value!==0){
            res.json({
                message:'User already exists',
                existsUser:true,
            })
        }else{

            const usersIndex = await client.index({
                index: 'users-index',
                refresh: "true",
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    dateOfBirth: dateOfBirth,
                    password: password,
                }
            });
            console.log(usersIndex)
        }

        const query = await client.search({
            index:'users-index',
            body:{
                query: {
                    "match_all": {}
                }
            }
        });
        res.json({
            message: 'User successfully received',
            existsUser: false,
        });


    } catch(err){
        console.error(err);
    }
}

app.listen(port, () =>
    console.log(`Server listening on port ${port}!\n`)
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
    console.log(`First Name received: ${req.body.firstName} \nLast Name received: ${req.body.lastName}\nEmail received: ${req.body.email} \nDate of birth received: ${req.body.dateOfBirth}\nPassword received: ${req.body.password} \n` );

    registerUser(req,res);
});





