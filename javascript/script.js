import { listCaracters } from './constants.js';
import { generateHash } from './data/generate-hash.js';

const $generate = document.querySelector('#generate input');
const $lenghtPassword = document.querySelector('#length-password input');
const $allBox = document.querySelectorAll('#checkbox input');

document.querySelector('.btn-generate').addEventListener('click', start);
document.querySelector('#generate button').addEventListener('click', copy);

function copy() {
  document.querySelector('#generate input').select();
  document.execCommand('copy');
}

function checkAllBox() {
  const toArray = Array.from($allBox);
  return toArray.map((box) => box.checked);
}

function start() {
  const hash = generateHash(listCaracters, {
    lenght: $lenghtPassword.value,
    boxes: checkAllBox(),
  });

  $generate.value = hash;
}
