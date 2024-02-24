const firstPasswordEl = document.getElementById('firstPassword');
const secondPasswordEl = document.getElementById('SecondPassword');
const selectorEl = document.getElementById('letterSizeSelector');

const copiedPasswordPopupEl = document.getElementById('copiedPasswordPopup');


const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#",
  "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

// const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]


function randomCharacters(array) {
  let randomness = Math.floor(Math.random() * array.length);
  return randomness
}

function getPassword() {
  firstPasswordEl.textContent = ''
  secondPasswordEl.textContent = ''

  for (let i = 0; i < +selectorEl.value; i++) {
    firstPasswordEl.textContent += characters[randomCharacters(characters)];
    secondPasswordEl.textContent += characters[randomCharacters(characters)];
  }

  // if (onlyLetters) {
  //   for (let i = 0; i < +selectorEl.value; i++) {
  //     firstPasswordEl.textContent += characters[randomCharacters(characters)]
  //     secondPasswordEl.textContent += characters[randomCharacters(characters)]
  //   }
  // } else {
  //   for (let i = 0; i < +selectorEl.value; i++) {
  //     firstPasswordEl.textContent += allCharacters[randomCharacters(allCharacters)]
  //     secondPasswordEl.textContent += allCharacters[randomCharacters(allCharacters)]
  //   }
  // }


}

firstPasswordEl.addEventListener('click', () => {

  if (!firstPasswordEl.textContent) {
    console.log("nothing to copy")
  } else {
    navigator.clipboard.writeText(firstPasswordEl.textContent)
      .then(() => {
        // console.log('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });

    copiedPasswordPopupEl.textContent = firstPasswordEl.textContent
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }

})

secondPasswordEl.addEventListener('click', () => {
  if (!secondPasswordEl.textContent) {
    console.log("nothing to copy")
  } else {
    navigator.clipboard.writeText(secondPasswordEl.textContent)
      .then(() => {
        // console.log('Text copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy text to clipboard:', error);
      });

    copiedPasswordPopupEl.textContent = secondPasswordEl.textContent
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
  }
})


/* ========================================= */
/* ============ EXTERNAL POPUP ============= */
/* ========================================= */


const toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

// button.addEventListener("click", () => {
//   toast.classList.add("active");
//   progress.classList.add("active");

//   timer1 = setTimeout(() => {
//     toast.classList.remove("active");
//   }, 5000); //1s = 1000 milliseconds

//   timer2 = setTimeout(() => {
//     progress.classList.remove("active");
//   }, 5300);
// });

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

