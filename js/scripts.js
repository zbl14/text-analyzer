// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function ommitOffensiveWords(text) {
  let goodWords = [];
  let textArray = text.toLowerCase().split(" ");
  textArray.forEach(function(element) {
    if(!element.includes("zoinks") && !element.includes("muppeteer") && !element.includes("biffaroni") && !element.includes("loopdaloop")){
      goodWords.push(element);
    } 
  });
  return goodWords.join(" ");
}

// UI Logic
//bold pen but not pen in happen
// function boldPassage(word, text) {
//   if (noInputtedWord(word, text)) {
//     return "";
//   }
//   const regexWord = new RegExp("\\b" + word + "\\b", "gi");
//   const boldedWord = "<b>" + word + "</b>";
//   const htmlString = text.replace(regexWord, boldedWord);
//   return "<p>" + htmlString + "</p>";
// }


//bold pen in happen
function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  const regexWord = new RegExp(word, "gi");
  const boldedWord = "<b>" + word + "</b>";
  const htmlString = text.replace(regexWord, boldedWord);
  return "<p>" + htmlString + "</p>";
}

// function boldPassage(word, text) {
//   if (noInputtedWord(word, text)) {
//     return "";
//   }
//   let htmlString = "<p>";
//   let textArray = text.split(" ");
//   textArray.forEach(function(element, index) {
//     if (word.toLowerCase() === element.toLowerCase()) {
//       htmlString = htmlString.concat("<b>" + element + "</b>");
//     } else {
//       htmlString = htmlString.concat(element);
//     }
//     if (index !== (textArray.length - 1)) {
//       htmlString = htmlString.concat(" ");
//     }
//   });
//   return htmlString + "</p>";
// }

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});