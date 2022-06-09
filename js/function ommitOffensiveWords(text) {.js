function ommitOffensiveWords(text) {
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let goodWords = [];
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
    if(element.includes("zoinks") || element.includes("muppeteer") || element.includes("biffaroni") || element.includes("loopdaloop")){
          // console.log(true);
          // console.log(goodWords);
          goodWords.push("");
        } 
          // console.log(false)
          // console.log(goodWords);
          // if (goodWords.includes(element)){
          //   continue;
          // } else {
            goodWords.push(element);
        });
        return goodWords.join(" ");
       }

ommitOffensiveWords("hello zoinks")


