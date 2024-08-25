let a = {
    name:"Rakshit",
    language: "js",
    run : ()=>{
        alert("self run")
    }
}
console.log(a)

let p = {
    run: ()=>{
        alert("run")
    }
}
p.__proto__ = {
    name : "OK"
}

a.__proto__ = p
a.run()