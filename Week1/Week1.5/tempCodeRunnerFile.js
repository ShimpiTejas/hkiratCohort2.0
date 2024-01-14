function tejasReadFile()
{
    return new Promise(function(res, rej){
        fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
            if(err){
                rej(err);
            }
            else{
                res(data);
            }
        });
    })
}

a = tejasReadFile();
console.log(a)


a.then(()=>console.log("Success")).catch(()=>console.log("Failure" ));

setTimeout(function(){
    console.log(a);
}, 1000);
