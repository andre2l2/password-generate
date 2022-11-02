export function generateHash(caracters, { lenght = 0, boxes = [false, false, false, false] }) {
  let password = '';

  let c = 0;
  while (c < lenght && lenght) {
    if (boxes[0] && c < lenght) {
      c++;

      const length = caracters.uppercase.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.uppercase[caracter];
    }

    if (boxes[2] && c < lenght) {
      c++;

      const length = caracters.lowercase.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.lowercase[caracter];
    }

    if (boxes[3] && c < lenght) {
      c++;

      const length = caracters.numbers.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.numbers[caracter];
    }

    if (boxes[4] && c < lenght) {
      c++;

      const length = caracters.symbols.length;
      const random = Math.random() * length;
      const caracter = Math.floor(random);
      password += caracters.symbols[caracter];
    }
  }

  return password;
}
