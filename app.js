/***********LOCAL MODULE (mathlib) **********/



// console.log("hello world")
// var a = 5;
// var b = 6 ;

// console.log(a+b)
// import {sum , minus, multiply} from "./mathlib" // babel
const mathlib = require("./mathlib")
// const {minus,sum,multiply} = require('./mathlib')
// console.log(mathlib.minus(11,6))
// console.log(process.argv)
var a = Number(process.argv[2])
var operation = process.argv[3]
var b = Number(process.argv[4]) 
// console.log(mathlib.sum(a,b))
switch (operation) {
    case "+":
        return console.log(mathlib.sum(a,b))
    case "-":
        return console.log(mathlib.minus(a,b))
    case "*":
        return console.log(mathlib.multiply(a,b))

    default:
        return console.log("try again")
}


