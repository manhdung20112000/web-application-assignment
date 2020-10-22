//bai 1
// array = ["a","d","e"];

// array.forEach(myFunction);

// function myFunction (element){
//     console.log(element.toUpperCase());
// }

//bai 2

let array = ['a', "bbb", c];
for (let i=0; i < array.length; i++) {
    console.log("This value is:", array[i]);
}
//bai 3

function arrayDouble(arr) {
    for (let i = 0; i<arr.length; i++){
        arr[i] *= 2;
    }
    return arr;
}

//bai 4
function hello(str) {
    let a = str.split("");
    a[0] = a[0].toUpperCase();
    console.log(a.join(""));

    let b = str.split("");
    b = b.reverse();
    console.log(b.join(""));
}

str = "hello";
hello(str);

function calSum(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i];
        console.log(sum);
    }
}

arr = [1,2,1,3];
calSum(arr);


//bai 6
let obj = {
    salary : 10,
    occupation : "coder"
}

console.log(obj)