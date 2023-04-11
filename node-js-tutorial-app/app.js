const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to Kanyin's Page")
})

app.get('/user/:name/:age/:sex', (req, res) => {
    const { name, age, sex } = req.params;

    const user = {
        name: name,
        age: age,
        sex: sex
    };

    // add user object to request
    req.user = user;

    // return user object as JSON response
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000...');
});