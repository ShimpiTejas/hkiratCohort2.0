// Async vs Sync functions, real use of callbacks, JS Browser architecture
// Promises, async await, fetch, axios



// Synchronous : Sequentially executed
// Asynchronous : Not sequentially executed / opposite of synchronous

// js gives some functions which are asynchronous
// setTimeout() fs.readfile(),  setInterval() , fetch() , ajax() , axios() , promises , async await

// function sum(n) {
//     let a =0;
//     for(let i =0; i < n; i++){
//         a += i;
//     }

//     return a;
// }


// function findSumTill100(){
//     let ans = sum(100);
//     console.log(ans);
// }


// setTimeout(findSumTill100, 1000);
// console.log("Hello I am running before the sum function, coz setTimeout is asynchronous");

// Callbacks are used to make asynchronous functions synchronous

// Callbacks are functions passed as arguments to other functions

const fs = require('fs');

// EXAMPLE 1
// fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
//     console.log(data);
// });

// console.log("Hi there from main.js")



// EXAMPLE 2
// fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
//      console.log(data);
// });

// console.log("Hi there from main.js 1")

// for(let i =0; i < 1000000000; i++){
//     let a = i;
// }

// console.log("Hi there from main.js 2")

// Here file completes its pending task and then it goes to the pending async results or calls


// Real use of callbacks is in the Async functions like fs.readFile("filename", utf-8, callback)


// Promises and async await


// Promises : ugly way to make our own asynchronous functions


// function tejasReadFile(cb)
// {
//     fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
//         cb(data);
//     });
// }


// function onDone(data){
//     console.log(data);
// }

// tejasReadFile(onDone);

// cleaner way : using promises, make your own asynchronous functions

// function tejasReadFile()
// {
//     console.log("inside tejasReadFileFunction");
//     return new Promise(function(resolve) {
//         console.log("inside promise");
//         fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
//             console.log("before resolve")
//             resolve(data);
//         });
//     })
// }

// function onDone(data){
//     console.log(data);
// }

// a = tejasReadFile()
// console.log(a)
// a.then(onDone);

// setTimeout(function(){
//     console.log(a);
// }, 1000);

// promise is just a class we initaitiate it with new keyword and it takes a function as an argument

// var d = new Promise(function(resolve, reject){
//     if(true){
//         resolve("Success");
//     }
//     else{
//         reject("Failure");
//     }
// }

// );

// d.then(function(data){
//     console.log(data);
// })


// old readfile with Promise


// function tejasReadFile()
// {
//     return new Promise(function(res, rej){
//         fs.readFile('Week1/Week1.5/a.txt', 'utf-8', function(err, data){
//             if(err){
//                 rej(err);
//             }
//             else{
//                 res(data);
//             }
//         });
//     })
// }

// a = tejasReadFile();
// console.log(a)


// a.then((data)=>console.log(data)).catch(()=>console.log("Failure" ));

// setTimeout(function(){
//     console.log(a);
// }, 1000);


// Async Await : cleaner way to make our own asynchronous functions



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


async function onDone(){
    let data = await tejasReadFile();
    console.log(data);
}

onDone();