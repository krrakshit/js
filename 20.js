 alert("enter the value of a")
 let a = prompt("enter a here")
 a = Number.parseInt(a)
 
 // document .write helps to add in the document 
 alert("you entered a of type" +(typeof a))
 let write = confirm("do you want to write it to the page")
 if(write){
    document.write(a)
 }
 else{
    document.write("please allow me to write")
 }