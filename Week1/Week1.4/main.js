// Loops

// let ans = 0;

// for(let i =1; i <= 50; i++){
//     ans += i;
// }

// console.log(ans)


//callbacks


function square(num){
    return num * num;
}

function cube(num){
    return num * num * num;
}

function sum(a , b, cb)
{
    // you can call a function inside a function
    // x = square(a);
    // y = square(b);
    // return x + y;



    // you can pass a function as an argument
    return cb(a) + cb(b);//This is called a callback function

}





console.log(sum(2,3,square));
console.log(sum(2,3,cube));