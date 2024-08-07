let promise = new Promise(function(resolve,reject){
    alert("hello")
    resolve(56)
})
console.log("Hello One")
setTimeout(function(){
    console.log("hello two in two seconds")
},2000)
console.log("My name is "+"Hello three")
console.log(promise)