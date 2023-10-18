/* Part 2 */
console.log('PART 2');

/* Loop over all numbers from 1 through 21 and print them to the console. */
for (let i = 1; i < 21; i++) {
  console.log(i);
}

/* Part 3 */
console.log('PART 3');

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

/**
 * A map from special numbers (3 and 5 here) to its corresponding string.
 * This makes it easy to add new rules.
 */
const numberToStringMapping = {
  3: 'eple',
  5: 'kake',
};

/** The keys of the numberToStringMapping object. */
const specialNumbers = Object.keys(numberToStringMapping);

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  /*
    I chose to a reduce over the special numbers, adding each string ('eple' or 'kake') to
    the specialOutput variable if the number is divisible by any of the keys of the map.
  */
  const specialOutput = specialNumbers.reduce((prev, curr) => {
    /*
       Check to see if the number is divisible with the special number.
       If this is NOT the case, make no changes to the previous value.
    */
    if (number % curr !== 0) return prev;

    /* Look up the string that the current special number maps to and add it to the output. */
    return prev + numberToStringMapping[curr];
  }, '');

  /*
    Check to see if the number was divisible by any special numbers.
    If it was not, then the lenght of the speicalOutput variable is 0.
  */
  if (specialOutput.length === 0) {
    console.log(number);
    continue;
  }

  console.log(specialOutput);
}

/* Part 4 */
const title = document.getElementById('title');
title.innerText = 'Hello, JavaScript';

/* Part 5 */
const magicDiv = document.getElementById('magic');

function changeDisplay() {
  magicDiv.style.display = 'none';
}

function changeVisibility() {
  magicDiv.style.visibility = 'hidden';
  magicDiv.style.display = 'block';
}

function reset() {
  magicDiv.style.visibility = 'visible';
  magicDiv.style.display = 'block';
}

const displayNoneButton = document.getElementById('display-none-btn');
displayNoneButton.onclick = changeDisplay;

const changeVisibilityButton = document.getElementById('visibility-hidden-btn');
changeVisibilityButton.onclick = changeVisibility;

const resetButton = document.getElementById('reset-btn');
resetButton.onclick = reset;

/* Part 6 */
const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'Java',
  'AJAX',
  'JSON',
  'React',
  'Angular',
  'Bootstrap',
  'Node.js',
];

const ulElement = document.getElementById('tech');

technologies.forEach((tech) => {
  const liElement = document.createElement('li');
  liElement.innerText = tech;
  ulElement.appendChild(liElement);
});
