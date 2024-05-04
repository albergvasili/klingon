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
    transitive: false,
    english: "goes",
    level: 1,
    imagine: "JACK GOES up the Hill.",
  },
  ghoS: {
    klingon: "ghoS",
    type: "verb",
    transitive: false,
    english: "comes",
    level: 1,
    imagine: "lots of people COME towards you in a RUSH.",
  },
  Sop: {
    klingon: "Sop",
    type: "verb",
    transitive: true,
    english: "eats",
    level: 1,
    imagine: "you EAT everything in the SHOP. CHOP CHOP!",
  },
  tlhutlh: {
    klingon: "tlhutlh",
    type: "verb",
    transitive: true,
    english: "drinks",
    level: 1,
    imagine: "a musician DRINKS wine using THE LUTE as a cup.",
  },
  jatlh: {
    klingon: "jathl",
    type: "verb",
    transitive: false,
    english: "speaks",
    level: 1,
    imagine: "a SPEAKING CHART WILL always tell you where to go.",
  },
  yaj: {
    klingon: "yaj",
    type: "verb",
    transitive: true,
    english: "understands",
    level: 1,
    imagine: "no one UNDERSTANDS the inscription written on the ARCH.",
  },
  laD: {
    klingon: "laD",
    type: "verb",
    transitive: true,
    english: "reads",
    level: 1,
    imagine: "you READ a large book on how to make LARD.",
  },
  ghItlh: {
    klingon: "ghItlh",
    type: "verb",
    transitive: true,
    english: "writes",
    level: 1,
    imagine: "you WRITE a RIDDLE to describe how to find your buried treasure.",
  },
  suffix_be_: {
    klingon: "-be'",
    type: "suffix",
    english: "don't",
    level: 1,
    imagine: "this word is NOT 'woman'... It's a suffix.",
  },
};

let quiz = document.getElementById("quiz");
let chooseLesson = document.getElementById("choose-lesson");
let startLesson = document.getElementById("start-lesson");
startLesson.addEventListener("click", () => {
  chooseLesson.setAttribute("style", "display: none");
  chooseLanguage();
}
);

function newElement(element, classe="", extraAttribute=false, type=false) {
  let newElement = document.createElement(element);
  newElement.setAttribute("class", classe);
  if (extraAttribute) {
    newElement.setAttribute(extraAttribute[0], extraAttribute[1]);
  }
  if (type) {
    newElement.setAttribute("type", type);
  }
  return newElement;
};

function chooseLanguage() {
  //TODO: refactor: selectQuiz(buttonValue, questionCreatorFunction)
  //
  let choose = document.getElementById("choose-language");
  let englishKlingon = newElement("input", "", ["value", "English to Klingon"], "button");
  let klingonEnglish = newElement("input", "", ["value", "Klingon to English"], "button");
  let englishKlingonSentence = newElement("input", "", ["value", "Enlish-Klingon sentences"], "button");
  let klingonEnglishSentence = newElement("input", "", ["value", "Klingon-English sentences"], "button");

  englishKlingon.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    displayWords(1, "english", "klingon")
  });

  englishKlingonSentence.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    sentenceGenerator("english", "klingon");
  });

  klingonEnglish.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    displayWords(1, "klingon", "english")
  });

  klingonEnglishSentence.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    sentenceGenerator("klingon", "english");
  });

  choose.append(englishKlingon, klingonEnglish, englishKlingonSentence, klingonEnglishSentence);
};

function questions(translate, answer, wrongAnswer="", toLang) {
  let questionContainer = newElement("div", "questionContainer");
  let formContainer = newElement("div", "formContainer");
  let label = document.createElement("label");
  let input = newElement("input", "", ["size", 10], "text");
  let button = newElement("input", "", ["value", "submit"], "submit");
  let result = newElement("div", "result", ["style", "display: none"]);

  label.textContent = `${translate} :`;

  button.addEventListener("click", () => {
    checkAnswer(input, answer, result, toLang);
  });

  result.textContent = `Try again ${wrongAnswer}`;

  formContainer.append(label, input, button);
  questionContainer.append(formContainer, result);

  return questionContainer;
};
 
function displayWords(level, fromLang, toLang) {

  //Filter words by level |TODO: extract logic to outer scope
  let dict;

  for (let word in dictionary) {
    if (dictionary[word].level <= level) {
      dict = { ...dict, [word]: dictionary[word] }
    }
  }

  let vocabulary = newElement("div");

  //Create tags for each word
  for (let word in dict) {
    vocabulary.append(questions(dict[word][fromLang], dict[word][toLang], `Imagine ${dict[word].imagine}`, toLang));
  }

  quiz.append(vocabulary);
};

function checkAnswer(input, answer, result, toLang) {
  let inputValue;
  if (toLang === "english") {
    inputValue = input.value.trim().toLowerCase();
    answer = answer.toLowerCase();
  } else {
    inputValue = input.value.trim();
  }

  if (inputValue === answer) {
    result.removeAttribute("style");
    result.textContent = "Correct !";
    input.setAttribute("readonly", "readonly");
  } else {
    result.removeAttribute("style");
  }
};

function randomWord(selectDictionary) {
  let dictionaryKeys = Object.keys(selectDictionary);
  return dictionaryKeys[Math.floor(Math.random()*dictionaryKeys.length)];

};

function sentenceGenerator(fromLang, toLang) {
  let verbDict;
  let nounDict;
  for (let word in dictionary) {
    if (dictionary[word].type === "verb") {
      verbDict = { ...verbDict, [word]: dictionary[word] };
    } else if (dictionary[word].type === "noun") {
      nounDict = { ...nounDict, [word]: dictionary[word] };
    }
  }

  // let numberOfNouns = () => Math.floor(Math.random()*2);

  let sentences = newElement("div");

  for (let i = 0; i < 10; i++){
    let verb = randomWord(verbDict);
    let noun = randomWord(nounDict);
    let phrase = {
      klingon: `${verbDict[verb].klingon} ${nounDict[noun].klingon}`,
      english: `The ${nounDict[noun].english} ${verbDict[verb].english}`
    };

    sentences.append(questions(phrase[fromLang], phrase[toLang], "", toLang));
  }

  quiz.append(sentences);
};
