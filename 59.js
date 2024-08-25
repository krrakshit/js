const sayhello = (name, greeting) => {
  console.log(greeting + "" + name);
};
const x = {
  name: "Rakshit",
  role: "js developer",
  exp: "Intern",
  show: function () {
    setTimeout(function () {
      console.log(`The name is ${this.name}\n the role is ${this.role}`);
    }, 2000);
  },
};
x.show();
