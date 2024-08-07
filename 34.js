//let a = prompt("what is your name")
// console.log("start")
// setInterval(function(){
//     console.log("it is working")
// },3000)
// console.log("end")


//call backs
function loadScript(src,callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("SRC: "+src)
    callback(null,src)
    }
    script.onerror = function(){
        console.log("error loading script :"+src)
    callback(new Error("src got some error"))
    }

    document.body.appendChild(script);
}
function hello(error,src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    alert("hello world"+src)
}
loadScript("google.com",hello)
