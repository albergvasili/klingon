//import dictionary from './dictionary.js';
let dictionary = { 
  level1: { 
    loD: { 
      klingon: "loD", 
      nype: "noun", 
      english: "man"
    }, 
    be_: { 
      klingon: "be'", 
      type: "noun", 
      english: "woman", 
    }, 
  }, 
}; 
 
function displayWords(level) {
  let dict = dictionary[level];
  let words = Object.keys(dict);
  let lesson = document.getElementById("lesson");

  for (let word in dict) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("input");

    label.textContent = dict[word].klingon;

    input.setAttribute("type", "text");
    input.setAttribute("id", dict[word].klingon);

    button.setAttribute("type", "submit");
    button.addEventListener("click", () => {
      console.log(typeof input.value, typeof dict[word].english);
      checkAnswer(input, dict[word].english);
    });

    lesson.append(label, input, button);
  };
};

let testFunction = document.getElementById("start");
testFunction.addEventListener("click", () => displayWords("level1")); //testing function

function checkAnswer(input, answer) {
  if (input.value == answer) {
    console.log("oui");
  } else {
    console.log("non");
  };
};

