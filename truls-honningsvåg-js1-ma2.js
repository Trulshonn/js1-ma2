// question 1

const myFunctionExpression = function() {
    console.log("Truls");
};


// question 2


const input = document.querySelector(".btn") .addEventListener("click", myFunctionExpression)


// question 3


document.querySelector("#firstName").addEventListener("keydown", function(event) {
    console.log(event.target.value);
  });


// question 4

const buttonVariable = document.querySelector("button");

buttonVariable.addEventListener("mouseover", () => {
  buttonVariable.classList = "hover";
});

// question 5

buttonVariable.addEventListener("mouseout", () => {
    buttonVariable.classList = "";
  });
  

// question 6

const lis = document.querySelectorAll("li");

lis.forEach(li => {
  li.addEventListener("mouseover", event => {
    console.log(li.getAttribute("data-animal"));
  });
});


// question 7

const animal = "cow";

switch (animal) {
  case "bird":
    console.log("Tweet");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "cat":
    console.log("Meao");
    break;
  default:
    console.log("Harrumph");
}


// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(name => {
  console.log(name);
});


// question 9

function logTime() {
    console.log ("hello");

    if(counter === 5) {
        clearInterval(intervalId);
    }

    counter++;

}

let counter = 0;

const intervalId = setInterval(logTime, 500);

// question 10

document.querySelector