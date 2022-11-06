export function generateHash(caracters, { length = 0, boxes = [false, false, false, false] }) {
  let password = '';

  if (boxes.every((box) => box === false)) return 'Select one type below';

  let c = 0;
  while (c < length && length) {
    if (boxes[0] && c < length) {
      c++;

      const length = caracters.uppercase.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.uppercase[caracter];
    }

    if (boxes[1] && c < length) {
      c++;

      const length = caracters.lowercase.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.lowercase[caracter];
    }

    if (boxes[2] && c < length) {
      c++;

      const length = caracters.numbers.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.numbers[caracter];
    }

    if (boxes[3] && c < length) {
      c++;

      const length = caracters.symbols.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.symbols[caracter];
    }
  }

  return password;
}
