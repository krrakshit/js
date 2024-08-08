
 try {

    let age = prompt("Enter your age")
   age = Number.parseInt(age)
   if(age>120){
    throw new ReferenceError("not true")
   }
    
    
} catch (error) {
    
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("the script is still running")