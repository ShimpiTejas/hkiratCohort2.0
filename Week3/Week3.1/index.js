// Middelwares  

const express = require('express')

const app = express();

app.get('/health-checkup', function(req, res){
    const username = req.headers.username;
    console.log(username)
    
    const password = req.headers.password;
    console.log(password)
    const kidneyId = req.query.kidneyId;
    console.log(kidneyId)
    if(username != "tejas" || password != "pass")
    {
        // do something with the kidney here
       
        res.status(400).json({"msg" : " Bad Input ! "})
        return;
        
    }

    if(kidneyId != 1 && kidneyId != 2)
    {
        res.json({"msg": "something with your inputs"});
        return;
    }

    if(kidneyId == 1 || kidneyId == 2)
    {
        res.json({"msg": "your kidney is fine"});
        return;
    }

})

app.get('/', function(req, res){
    res.json({"msg":"Hi There !!!! Newbie"})
})

app.listen(3000, function(req, res){
    console.log("listening on 3000");
})