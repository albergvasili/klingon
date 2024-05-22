let sameAsEnglish = "The letters 'b, ch, j, l, m, n, ng, p, t, v, w, y' are pronounced as in english.";
let differentConsonants = {
  D: "The letter 'D' is almost like the english 'd'. The tongue touches the roof of the mouth a little further back.",
  gh: "The letter 'gh' sounds like the french 'r'. Relaxing the tongue and humming, the vocal cords vibrate.",
  H: "The letter 'H' is a strong and raspy sound like the klingon 'gh', but the vocal cords don't vibrate. It sounds like the spanish (from spain) 'j' in viejo.",
  q: "The letter 'q' is like the english 'k'. The tongue reaches for the back of the mouth.",
  Q: "The letter 'Q' sounds like a combination of the letters 'q' and 'H'.",
  r: "The letter 'r' is slightly rolled like in spanish.",
  S: "The letter 'S' sounds like the english 'sh'.",
  tlh: "The letter 'tlh' is like the spanish 'tl', but the air is forced through the space between the sides of the tongue.",
};

let videos = {
  0: "https://www.youtube.com/embed/YjROGAY19pU?si=KBzXdlQPnNPDhJ8E",
  1: "https://www.youtube.com/embed/W3G1gSWuy7Y?si=xRQt81a3uVVHKt0c",
  2: "https://www.youtube.com/embed/AUsUCx-72EI?si=jprxZ-EKqYH8vxvu",
  3: "https://www.youtube.com/embed/HAkvsCCbivo?si=HK3ho7OwFDmGx1Kq",
  4: "https://www.youtube.com/embed/4CrJ1w_JC3M?si=ub0PmPd6aUxUl4E3",
  5: "https://www.youtube.com/embed/NClqTP2Uq-E?si=Zcc5WPcRpDO3yNUj",
};

let quiz = document.getElementById("quiz");
let chooseLesson = document.getElementById("choose-lesson");
let chooseLangDiv = document.getElementById("choose-language");
let selection = document.getElementById("selection");
let select = document.getElementById("select");
let dictByLevel;
let dictAccumulated;
let currentLevel;

selection.addEventListener("change", (event) => start(event));

function start(exception) {
  select.setAttribute("disabled", "");
  quiz.removeChild(quiz.lastChild);
  currentLevel = selection.value;
  if (exception.target.value === "0") {
    chooseLangDiv.setAttribute("style", "display: none");
    pronunciationGenerator();
  } else {
    let h2 = document.createElement("h2");
    h2.textContent = `Welcome to lesson ${selection.value} !`;
    quiz.append(h2);
    chooseLangDiv.removeAttribute("style");
    chooseLangDiv.removeChild(chooseLangDiv.lastChild);
    selectLevel(selection.value);
    chooseLanguage();
  }
};

function pronunciationGenerator() {
  let title = document.createElement("h3");
  title.textContent = "Pronunciation:";
  let p = document.createElement("p");
  p.textContent = sameAsEnglish;
  let pronun = document.createElement("div");
  pronun.append(title, p);

  for (let letter in differentConsonants) {
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let div = document.createElement("div");
    h3.textContent = letter;
    p.textContent = differentConsonants[letter];
    div.append(h3, p);
    pronun.append(div);
  }
  pronun.append(iframeTag(videos[currentLevel]));
  quiz.append(pronun);
}

function selectLevel(level) {
  dictByLevel = {};
  for (let word in dictionary) {
    if (dictionary[word].level == level) {
      dictByLevel = { ...dictByLevel, [word]: dictionary[word]};
    }
  }
  for (let word in dictionary) {
    if (dictionary[word].level <= level) {
      dictAccumulated = { ...dictAccumulated, [word]: dictionary[word]};
    }
  }
};

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

/* TODO: finish refactoring chooseLanguage()
function selectQuiz(buttonValue, questionGeneratorFunction) {
  let languageButton = newElement("input", "", ["value", buttonValue], "button");
  languageButton.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    return questionGeneratorFunction;
  });
};
*/

function chooseLanguage() {
  let choose = document.getElementById("choose-language");
  let div = newElement("div");
  let vocabularyLesson = newElement("input", "", ["value", "Vocabulary"], "button");
  let englishKlingon = newElement("input", "", ["value", "Eng-Kli words"], "button");
  let klingonEnglish = newElement("input", "", ["value", "Kli-Eng words"], "button");
  let englishKlingonSentence = newElement("input", "", ["value", "Eng-Kli sentences"], "button");
  let klingonEnglishSentence = newElement("input", "", ["value", "Kli-Eng sentences"], "button");

  div.setAttribute("id", "choose-lang");

  vocabularyLesson.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    vocabularyGenerator();
  });

  englishKlingon.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    wordGenerator("english", "klingon", true)
  });

  englishKlingonSentence.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    sentenceGenerator("english", "klingon");
  });

  klingonEnglish.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    wordGenerator("klingon", "english")
  });

  klingonEnglishSentence.addEventListener("click", () => {
    quiz.removeChild(quiz.lastChild);
    sentenceGenerator("klingon", "english");
  });

  div.append(vocabularyLesson, englishKlingon, klingonEnglish, englishKlingonSentence, klingonEnglishSentence);

  choose.append(div);
};

function questions(translate, answer, hintMessage="", toLang, showHint=false) {
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

  if (showHint) {
    result.textContent = `Try again: ${hintMessage}`;
  } else {
    result.textContent = `Try again`;
  }

  formContainer.append(label, input, button);
  questionContainer.append(formContainer, result);

  return questionContainer;
};

function vocabularyGenerator() {
  let vocabulary = newElement("div");
  for (let word in dictByLevel) {

    let wordObject = dictByLevel[word];
    let div = newElement("div");
    let h3 = newElement("h3");
    let p = newElement("p");

    if (wordObject.type === "verb"){
      h3.textContent = `${wordObject.klingon} -> ${wordObject.english[0]}`;
    } else {
      h3.textContent = `${wordObject.klingon} -> ${wordObject.english}`;
    }
    p.textContent = `Imagine: ${wordObject.imagine}`;
    div.append(h3, p);

    vocabulary.append(div);
  }
  vocabulary.append(iframeTag(videos[currentLevel]));
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

function randomWord(selectDictionary, exceptions=[]) {
  let dictionaryKeys = Object.keys(selectDictionary).filter(word => !exceptions.includes(word));;

  return dictionaryKeys[Math.floor(Math.random()*dictionaryKeys.length)];
};

function wordGenerator(fromLang, toLang, hint) {
  let vocabulary = newElement("div");
  let wordsUsed = [];

  for (let i = 0; i < 15; i++){
    let word = randomWord(dictByLevel, wordsUsed);
    wordsUsed = [...wordsUsed, word];

    if (dictByLevel[word].type === "verb" && fromLang === "english") {
      vocabulary
        .append(questions(dictByLevel[word][fromLang][0], dictByLevel[word][toLang], `Imagine ${dictByLevel[word].imagine}`, toLang, hint));
    } else if (dictByLevel[word].type === "verb" && toLang === "english") {
      vocabulary
        .append(questions(dictByLevel[word][fromLang], dictByLevel[word][toLang][0], `Imagine ${dictByLevel[word].imagine}`, toLang, hint));
    } else {
      vocabulary
        .append(questions(dictByLevel[word][fromLang], dictByLevel[word][toLang], `Imagine ${dictByLevel[word].imagine}`, toLang, hint));
    }
  }

  quiz.append(vocabulary);
};

function sentenceGenerator(fromLang, toLang) {
  let verbDict;
  let nounDict;
  for (let word in dictAccumulated) {
    if (dictAccumulated[word].type === "verb") {
      verbDict = { ...verbDict, [word]: dictAccumulated[word] };
    } else if (dictAccumulated[word].type === "noun") {
      nounDict = { ...nounDict, [word]: dictAccumulated[word] };
    }
  }

  // let numberOfNouns = () => Math.floor(Math.random()*2);

  let sentences = newElement("div");

  for (let i = 0; i < 10; i++){
    let verb = randomWord(verbDict);
    let noun = randomWord(nounDict);
    let phrase = {
      klingon: `${verbDict[verb].klingon} ${nounDict[noun].klingon}`,
      english: `The ${nounDict[noun].english} ${verbDict[verb].english[0]}`
    };

    sentences.append(questions(phrase[fromLang], phrase[toLang], "", toLang));
  }

  quiz.append(sentences);
};

function iframeTag(link) {
  //TODO: finish creating function for iframes
  let iframe = document.createElement("iframe");
  iframe.setAttribute("src", link);
  iframe.setAttribute("title", "Youtube video player");
  iframe.setAttribute("width", "560");
  iframe.setAttribute("height", "315");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow",
    `accelerometer; autoplay; clipboard-write;
     encripted-media; gyrospope; picture-in-picture; web-share`
  );
  iframe.setAttribute("allowfullscreen", "");

  return iframe;
}
