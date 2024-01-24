const express = require('express')

const app = express();

app.use(express.json());
app.post('/health-checkup', function(req, res)
{
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;


    res.send(`you have ${kidneysLength} kidney(s)`);
})


app.listen(3000, function(req, res){
    console.log("Listening on 3000")
})

