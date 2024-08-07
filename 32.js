let x = function(e){
    alert("hello world 1")
 } 
 let y = function(e){
    alert("Hello World2")
}

btn.addEventListener('click',x)

btn.addEventListener('click',y)

let a = prompt("what is your favouritr nmber");
if(a=="2"){
    btn.removeEventListener('click',x )
}