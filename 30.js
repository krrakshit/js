document.write("hello")
const sum = (a,b)=>{
    console.log("yes i am running" +(a+b))
    a+b
} 

setTimeout(sum,1000,1,2)
setInterval(function(){
    alert("setinterval")
}, 3000)

let a = setTimeout(function(){
    alert("i am inside of set timeout")
},5000)

let b = prompt("do you want to run timeout")
if("n" ==b){
    clearTimeout(a)
}

console.log(a)