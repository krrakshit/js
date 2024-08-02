window.console.log(window);

window.alert("d");

//

let runagain = true;
const candrive = (a) => {
    return a >= 18 ? true : false;
  };
while (runagain) {
    let a = prompt("Enter your age");
a = Number.parseInt(a);
if(a<0){
    console.error("please enter a valid age")
    break;
}
  
  if (candrive(a)) {
    alert("you are eliginle to drive");
  } else {
    alert("you cannot drive");
  }
  runagain = confirm("do you want to continue?")
}


//q4
let number = prompt("enter your number")
number = Number.parseInt(number)
if(number>4){
    location.href = "https://google.com"
}

let color = prompt("enter the page background color")
document.body.style.background = color
 