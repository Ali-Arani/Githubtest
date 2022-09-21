var hello;
// // function hello() {
// //     document.getElementById("demo").innerHTML+="Hello world";

// // }
// hello = function() {
//     document.getElementById("demo").innerHTML+="Hello world";


// }


// hello=()=>{
//     document.getElementById("demo").innerHTML+="Hello world";

// }

// document.getElementById("btn").addEventListener("click",hello);
document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("demo").innerHTML+="Hello world";
})

var numbers=[1,2,3,4,5];
// const squres=numbers.map(n =>n*n)
//  document.write(squres)
var evens = new Array()
numbers.forEach(n => {
    if (n % 2 === 0) {
    evens.push(n);
    }
    })

    document.write(evens)