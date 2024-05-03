//import dictionary from './dictionary.js';
let dictionary = {
  loD: {
    klingon: "loD",
    type: "noun",
    english: "man",
    level: 1,
  },
  be_: {
    klingon: "be'",
    type: "noun",
    english: "woman",
    level: 1,
  },
  jup: {
    klingon: "jup",
    type: "noun",
    english: "friend",
    level: 1,
  },
  jagh: {
    klingon: "jagh",
    type: "noun",
    english: "enemy",
    level: 1,
  },
  puq: {
    klingon: "puq",
    type: "noun",
    english: "child",
    level: 1,
  },
  Saj: {
    klingon: "Saj",
    type: "noun",
    english: "pet",
    level: 1,
  },
  HoD: {
    klingon: "HoD",
    type: "noun",
    english: "captain",
    level: 1,
  },
  yaS: {
    klingon: "yaS",
    type: "noun",
    english: "officer",
    level: 1,
  },
  nov: {
    klingon: "nov",
    type: "noun",
    english: "alien",
    level: 1,
  },
  yiH: {
    klingon: "yiH",
    type: "noun",
    english: "tribble",
    level: 1,
  },
  Qel: {
    klingon: "Qel",
    type: "noun",
    english: "doctor",
    level: 1,
  },
  SID: {
    klingon: "SID",
    type: "noun",
    english: "patient",
    level: 1,
  },
  qorDu_: {
    klingon: "qorDu'",
    type: "noun",
    english: "family",
    level: 1,
  },
  ghu: {
    klingon: "ghu",
    type: "noun",
    english: "baby",
    level: 1,
  },
  tlhIngan: {
    klingon: "tlhIngan",
    type: "noun",
    english: "klingon",
    level: 1,
  },
  jaH: {
    klingon: "jaH",
    type: "verb",
    english: "goes",
    level: 1,
  },
  ghoS: {
    klingon: "ghoS",
    type: "verb",
    english: "comes",
    level: 1,
  },
  Sop: {
    klingon: "Sop",
    type: "verb",
    english: "eats",
    level: 1,
  },
  tlhutlh: {
    klingon: "tlhutlh",
    type: "verb",
    english: "drinks",
    level: 1,
  },
  jatlh: {
    klingon: "jathl",
    type: "verb",
    english: "speaks",
    level: 1,
  },
  yaj: {
    klingon: "yaj",
    type: "verb",
    english: "understands",
    level: 1,
  },
  laD: {
    klingon: "laD",
    type: "verb",
    english: "reads",
    level: 1,
  },
  ghItlh: {
    klingon: "ghItlh",
    type: "verb",
    english: "writes",
    level: 1,
  },
};
 
function displayWords(level) {

  //Filter words by level
  let dict;

  for (let word in dictionary) {
    if (dictionary[word].level <= level) {
      dict = { ...dict, [word]: dictionary[word] }
    };
  };

  let lesson = document.getElementById("lesson");

  //Create tags for each word
  for (let word in dict) {
    let wordContainer = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("input");
    let result = document.createElement("p");

    wordContainer.setAttribute("id", dict[word].klingon);
    wordContainer.setAttribute("class", "wordContainer");

    label.textContent = `${dict[word].klingon} :`;

    input.setAttribute("type", "text");
    input.setAttribute("id", dict[word].klingon);
    input.setAttribute("size", 10);

    button.setAttribute("type", "submit");
    button.setAttribute("value", "submit");
    button.addEventListener("click", () => {
      checkAnswer(input, dict[word].english, result);
    });

    result.setAttribute("style", "display: none");
    result.textContent = "Try again";//dict[word].type;

    wordContainer.append(label, input, button, result);
    lesson.append(wordContainer);
  };
};

let testFunction = document.getElementById("start");
//testFunction.addEventListener("click", () => displayWords("level1")); //testing function

function checkAnswer(input, answer, result) {
  if (input.value == answer) {
    result.removeAttribute("style");
    result.textContent = "Correct !";
    input.setAttribute("readonly", "readonly");
  } else {
    result.removeAttribute("style");
  };
};

displayWords(1); //testing function
