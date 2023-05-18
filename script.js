let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let already = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let life = 6;
let elementLife = document.getElementById("life");
let elementLetters = document.getElementById("letters");
let elementHiddenWord = document.getElementById("hiddenWord");
let elementImage = document.getElementById("image");
let elementResult = document.getElementById("result");
let words = [
  "GREEN",
  "RED",
  "YELLOW",
  "BLACK",
  "BLUE",
  "BROWN",
  "GRAY",
"PINK",
"PURPLE", 
  "WHITE",
  "GOLD",
  "SILVER"
];
let hiddenWord = words[Math.floor(Math.random() * words.length)];
let isFound = false;

elementLife.innerText = "Life " + life;
console.log(elementImage.src);
elementImage.src = life + ".png";

for (let index = 0; index < 26; index++) {
  elementLetters.innerHTML +=
    "<button class = letter id=" +
    letters[index] +
    " onclick=check(&quot;" +
    letters[index] +
    "&quot;)>" +
    letters[index] +
    "</button>";
}

for (let index = 0; index < hiddenWord.length; index++) {
  for (let index2 = 0; index2 < 26; index2++) {
    if (hiddenWord[index] == letters[index2]) {
      if (!already[index2]) {
        elementHiddenWord.innerText += "_ ";
      } else {
        elementHiddenWord.innerText += letters[index2];
      }
    }
  }
}

function check(letter) {
  if (life > 0 && elementHiddenWord.innerText.search("_") != -1) {
    for (let index = 0; index < hiddenWord.length; index++) {
      console.log(hiddenWord[index]);
      if (letter == hiddenWord[index]) {
        document.getElementById(letter).style.backgroundColor =
          "rgb(0, 255, 0)";
        isFound = true;
        for (let index = 0; index < 26; index++) {
          if (letter == letters[index]) {
            already[index] = true;
          }
        }
      }
    }
    if (isFound == false) {
      document.getElementById(letter).style.backgroundColor = "rgb(255, 0, 0)";
      life -= 1;
    }
    console.log(already);
    elementHiddenWord.innerText = "";
    for (let index = 0; index < hiddenWord.length; index++) {
      for (let index2 = 0; index2 < 26; index2++) {
        if (hiddenWord[index] == letters[index2]) {
          if (!already[index2]) {
            elementHiddenWord.innerText += "_ ";
          } else {
            elementHiddenWord.innerText += letters[index2] + " ";
          }
        }
      }
    }
    // if (letter.toUpperCase() == "A") {
    //     document.getElementById("A").style.backgroundColor = "rgb(0, 255, 0)";
    // } else {
    //     document.getElementById("A").style.backgroundColor = "rgb(255, 0, 0)";
    // }

    elementLife.innerText = "Life " + life;
    isFound = false;
    elementImage.src = life + ".png";
    
    if (life == 0) {
      result.innerText = "YOU LOOSE ! ! ! THE WORD IS " + hiddenWord;
    }

    if (elementHiddenWord.innerText.search("_") == -1) {
      result.innerText = "YOU WIN ! ! !";
    }
  }
}
