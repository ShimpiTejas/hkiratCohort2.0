const express = require('express');
const app = express();


const user = [{
    name : 'John',
    kidneys : [{
        healthy : false
    }]
}]

app.listen(3001, function(){
    console.log('listening on 3001')
    
});


app.use(express.json())

app.get('/', function(req, res){
    johnkidneys = user[0].kidneys
    const numberOfKidneys = johnkidneys.length
    let healthyKidneys = 0;
    for(let i =0; i < johnkidneys.length; i++){
        if(johnkidneys[i].healthy){
            healthyKidneys++;
        }
    }
    let unHealthyKidneys = numberOfKidneys - healthyKidneys;



    res.json({numberOfKidneys,
        healthyKidneys,
        unHealthyKidneys})
})


app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({healthy : isHealthy})
    res.json({message : 'kidney added'})
});