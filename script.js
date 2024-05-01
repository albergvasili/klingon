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
 
function wordSelect(level) {
  let dict = dictionary[level];
  let words = Object.keys(dict);

  console.log(words);

}

let testFunction = document.getElementById("start");
testFunction.addEventListener("click", () => wordSelect("level1")); //testing function

let lesson = document.getElementById("lesson");

let form = document.createElement("form");
let label = document.createElement("label");
let input = document.createElement("input");
let button = document.createElement("input");
label.textContent = dictionary.level1.loD.klingon;
input.setAttribute("type", "text");
input.setAttribute("id", "loD");
button.setAttribute("type", "submit");
button.addEventListener("click", test);


  function test() {
    if (input.value == dictionary.level1.loD.english) {
      console.log("oui");
    } else {
      console.log("non");
};
};



lesson.append(label, input, button);
