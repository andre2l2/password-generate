import { listCaracters } from './constants.js';
import { generateHash } from './data/generate-hash.js';

const $generate = document.querySelector('#generate input');
const $lenghtPassword = document.querySelector('#length-password input');
const $allBox = document.querySelectorAll('#checkbox input');
const $lengthInformation = document.querySelector('#length-password .length');
const $buttonGenerete = document.querySelector('.btn-generate');
const $buttonCopy = document.querySelector('#generate button');

$buttonGenerete.addEventListener('click', generatePassword);
$buttonCopy.addEventListener('click', copy);
$lenghtPassword.addEventListener('mousemove', updateLength);
$lenghtPassword.addEventListener('touchmove', updateLength);

function copy() {
  $generate.select();
  navigator.clipboard.writeText($generate.value);
  $generate.blur();
}

function checkAllBox() {
  const toArray = Array.from($allBox);
  return toArray.map((box) => box.checked);
}

function updateLength() {
  $lengthInformation.innerHTML = $lenghtPassword.value;
}

function generatePassword() {
  const hash = generateHash(listCaracters, {
    length: $lenghtPassword.value,
    boxes: checkAllBox(),
  });

  $generate.value = hash;
}
