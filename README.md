```sh
Describe: wordCounter()
```
Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

```sh
Describe: numberOfOccurrencesInText()
```
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

```sh
Describe: ommitOffensiveWords()
```
Test: "It should return an empty string when a single "zoinks" is passed in."
Code:
const text = "zoinks";
ommitOffensiveWords(text);
Epected Output: ""

Test: "It should return a string without "zoinks" when a single word is passed in."
Code:
const text = "hello";
ommitOffensiveWords(text);
Epected Output: "hello"

Test: "It should return a string without "zoinks", "muppeteer", "biffaroni", and "loopdaloop" when a single word is passed in."
Code:
const text = "hello";
ommitOffensiveWords(text);
Epected Output: "hello"

Test: "It should return a empty string if a single word that is "zoinks", "muppeteer", "biffaroni", or "loopdaloop" passed in regardless of case."
Code:
const text = "ZoinKs";
ommitOffensiveWords(text);
Epected Output: ""

Test: "It should return a string without a "zoinks", "muppeteer", "biffaroni", and "loopdaloop" when a sentence is passed in regardless of case."
Code:
const text = "Hello Zoinks, I like muppeteer? Do you like biffaroni and loopdaloop?";
ommitOffensiveWords(text);
Expected Output: "Hello I like Do you like and";

```sh
Describe: boldPassage()
```

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

