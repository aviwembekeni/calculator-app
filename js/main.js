const typingDisplayBox = document.getElementById("typing-display-box");
const resultDisplayBox = document.getElementById("result-display-box");
let number1 = '';
let number2 = '';
let symbol;

function buttonOnClick(value){
  if(value !== "="){
    typingDisplayBox.innerHTML += value;
  }else{
    let equation = typingDisplayBox.innerHTML;
    if(isNaN(equation[equation.length-1])){
      resultDisplayBox.innerHTML = "<span class='transitional-entry'>Incorrect format</span>";
      return;
    }
    const result = eval(equation);
    resultDisplayBox.innerHTML = `<span class='transitional-entry'>${result}</span>`;
  }
  transitionalEntry("move-down");
}

function clearScreen(){
  typingDisplayBox.innerHTML = "";
  resultDisplayBox.innerHTML = "";
}

function transitionalEntry(effect = "fade-in", timeout = 50){
  const transElems = document.querySelectorAll(".transitional-entry");
  let transitionedClass;
  switch (effect) {
    case "fade-in":
      transitionedClass = "faded-in";
      break;
    case "move-up":
      transitionedClass = "moved-up";
      break;
    case "move-down":
      transitionedClass = "moved-down";
      break;
    default:
      transitionedClass = "faded-in"
  }
  for(let i = 0; i < transElems.length; i++){
    const elem = transElems[i];
    elem.classList.add(effect);
    setTimeout(function(){
      elem.classList.add(transitionedClass);
    }, timeout);
  }
}
