//import dictionary from './dictionary.js';
let dictionary = {
  level1: {
    loD: {
      klingon: "loD",
      nype: "noun",
      english: "man",
    },
    be_: {
      klingon: "be'",
      type: "noun",
      english: "woman",
    },
    jup: {
      klingon: "jup",
      type: "noun",
      english: "friend",
    },
    jagh: {
      klingon: "jagh",
      type: "noun",
      english: "ennemy",
    },
    puq: {
      klingon: "puq",
      type: "noun",
      english: "child",
    },
    Saj: {
      klingon: "Saj",
      type: "noun",
      english: "pet",
    },
    HoD: {
      klingon: "HoD",
      type: "noun",
      english: "captain",
    },
    yaS: {
      klingon: "yaS",
      type: "noun",
      english: "officer",
    },
    nov: {
      klingon: "nov",
      type: "noun",
      english: "alien",
    },
    yiH: {
      klingon: "yiH",
      type: "noun",
      english: "tribble",
    },
    Qel: {
      klingon: "Qel",
      type: "noun",
      english: "doctor",
    },
    SID: {
      klingon: "SID",
      type: "noun",
      english: "patient",
    },
    qorDu_: {
      klingon: "qorDu'",
      type: "noun",
      english: "family",
    },
    ghu: {
      klingon: "ghu",
      type: "noun",
      english: "baby",
    },
    tlhIngan: {
      klingon: "tlhIngan",
      type: "noun",
      english: "klingon",
    },
    jaH: {
      klingon: "jaH",
      type: "verb",
      english: "goes",
    },
    ghoS: {
      klingon: "ghoS",
      type: "verb",
      english: "comes",
    },
    Sop: {
      klingon: "Sop",
      type: "verb"
      english: "eats"
    },
    tlhutlh: {
      klingon: "tlhutlh",
      type: "verb",
      english: "drinks",
    },
    jatlh: {
      klingon: "jathl",
      type: "verb",
      english: "speaks",
    },
    yaj: {
      klingon: "yaj",
      type: "verb",
      english: "understands",
    },
    laD: {
      klingon: "laD",
      type: "verb",
      english: "reads",
    },
    ghItlh: {
      klingon: "ghItlh",
      type: "verb",
      english: "writes",
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

