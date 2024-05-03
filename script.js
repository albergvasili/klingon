//import dictionary from './dictionary.js';
let dictionary = {
  loD: {
    klingon: "loD",
    type: "noun",
    english: "man",
    level: 1,
    imagine: "a MAN carries a heavy LOAD of equipment on his back.",
  },
  be_: {
    klingon: "be'",
    type: "noun",
    english: "woman",
    level: 1,
    imagine: "a WOMAN chases a ferocious BEAR with a stick.",
  },
  jup: {
    klingon: "jup",
    type: "noun",
    english: "friend",
    level: 1,
    imagine: "your best FRIEND is so hungry that they CHEW UP a plate.",
  },
  jagh: {
    klingon: "jagh",
    type: "noun",
    english: "enemy",
    level: 1,
    imagine: "you captured your ENEMY in a large glass JAR.",
  },
  puq: {
    klingon: "puq",
    type: "noun",
    english: "child",
    level: 1,
    imagine: "a small CHILD is PUKing non-stop.",
  },
  Saj: {
    klingon: "Saj",
    type: "noun",
    english: "pet",
    level: 1,
    imagine: "in a PET shop, you have never seen SUCH terrifying animals.",
  },
  HoD: {
    klingon: "HoD",
    type: "noun",
    english: "captain",
    level: 1,
    imagine: "two enemy guards HOLD your CAPTAIN (the Head of Department) by the arms.",
  },
  yaS: {
    klingon: "yaS",
    type: "noun",
    english: "officer",
    level: 1,
    imagine: "two enemy guards turn your OFFICER into a pile of ASH.",
  },
  nov: {
    klingon: "nov",
    type: "noun",
    english: "alien",
    level: 1,
    imagine: "aLIENS try to escape a star system that has suddendly gone NOVA.",
  },
  yiH: {
    klingon: "yiH",
    type: "noun",
    english: "tribble",
    level: 1,
    imagine: "a klingon shouts YEEEK when he finds himself sharing a bed with dozens of TRIBBLES.",
  },
  Qel: {
    klingon: "Qel",
    type: "noun",
    english: "doctor",
    level: 1,
    imagine: "your DOCTOR could not CARE Less about your health.",
  },
  SID: {
    klingon: "SID",
    type: "noun",
    english: "patient",
    level: 1,
    imagine: "a PATIENT refuses to let the nurse change the SEET.",
  },
  qorDu_: {
    klingon: "qorDu'",
    type: "noun",
    english: "family",
    level: 1,
    imagine: "you tie your FAMILY together with a CORD TO stop them from hitting each other with sticks.",
  },
  ghu: {
    klingon: "ghu",
    type: "noun",
    english: "baby",
    level: 1,
    imagine: "a kangoROO holds your BABY in his pouch.",
  },
  tlhIngan: {
    klingon: "tlhIngan",
    type: "noun",
    english: "klingon",
    level: 1,
    imagine: "the correct spelling of the word 'KLINGON'",
  },
  human: {
    klingon: "Human",
    type: "noun",
    english: "human",
    level: 1,
    imagine: "a human is a human.",
  },
  jaH: {
    klingon: "jaH",
    type: "verb",
    english: "goes",
    level: 1,
    imagine: "JACK GOES up the Hill.",
  },
  ghoS: {
    klingon: "ghoS",
    type: "verb",
    english: "comes",
    level: 1,
    imagine: "lots of people COME towards you in a RUSH.",
  },
  Sop: {
    klingon: "Sop",
    type: "verb",
    english: "eats",
    level: 1,
    imagine: "you EAT everything in the SHOP. CHOP CHOP!",
  },
  tlhutlh: {
    klingon: "tlhutlh",
    type: "verb",
    english: "drinks",
    level: 1,
    imagine: "a musician DRINKS wine using THE LUTE as a cup.",
  },
  jatlh: {
    klingon: "jathl",
    type: "verb",
    english: "speaks",
    level: 1,
    imagine: "a SPEAKING CHART WILL always tell you where to go.",
  },
  yaj: {
    klingon: "yaj",
    type: "verb",
    english: "understands",
    level: 1,
    imagine: "no one UNDERSTANDS the inscription written on the ARCH.",
  },
  laD: {
    klingon: "laD",
    type: "verb",
    english: "reads",
    level: 1,
    imagine: "you READ a large book on how to make LARD.",
  },
  ghItlh: {
    klingon: "ghItlh",
    type: "verb",
    english: "writes",
    level: 1,
    imagine: "you WRITE a RIDDLE to describe how to find your buried treasure.",
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
    result.textContent = `Try again: Imagine ${dict[word].imagine}`;//dict[word].type;

    wordContainer.append(label, input, button, result);
    lesson.append(wordContainer);
  };
};

let testFunction = document.getElementById("start");
//testFunction.addEventListener("click", () => displayWords("level1")); //testing function

function checkAnswer(input, answer, result) {
  if (input.value.toLowerCase() == answer) {
    result.removeAttribute("style");
    result.textContent = "Correct !";
    input.setAttribute("readonly", "readonly");
  } else {
    result.removeAttribute("style");
  };
};

displayWords(1); //testing function
