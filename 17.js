let arr = [1,2,3,4,5,6]
let a = prompt("enter a number")
a = number.parseInt(a)
arr.push(a)
console.log(arr)
//
let arr1 = [1,2,3,4,5]
// let n = arr1.filter((x)=>{
//     return x%10 == 0
// })

// console.log(n)

// let n1 = arr1.map((x)=>{
//     return x*x
// })
// console.log(n1)


let n2 = arr1.reduce((x1,x2)=>{
    return x1*x2
})

console.log(n2)