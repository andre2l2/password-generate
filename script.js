// add the event click in button Generate
document.querySelector('.btn-generate')
    .addEventListener('click', () => {
        start();
})

// create event click for button copy, and copy password in 
document.querySelector('#generate button')
    .addEventListener('click', () => {
        document.querySelector('#generate input').select();
        document.execCommand('copy');
    })

function start() {
    // this is a caracter list object
    const listCaracter = {
        uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        symbols: ['-', '!', '@', '#', '$', '%', '&']
    }

    // function responsible for checking the checkbox
    function checkAllBox() {
        const $lenghtPassword = document.querySelector('#length-password input').value;
        const $allBox = document.querySelectorAll('#checkbox input');

        return [
            $lenghtPassword,
            $allBox[0].checked,
            $allBox[1].checked,
            $allBox[2].checked,
            $allBox[3].checked
        ]
    }

    // Generate password function parmas (length, uppercase, lowercase, numbers, symbols)
    function generateHash(
            lenght = 0, 
            value1 = false, 
            value2 = false, 
            value3 = false, 
            value4 = false
        ){  
            
            const { random, floor } = Math;

            const $generate = document.querySelector('#generate input');
            let password = '';

            let c = 0;
            while (c < lenght && lenght) {

                if (value1 && c < lenght) {
                    c++;

                    let caracter = floor(random()*26);
                    password += listCaracter.uppercase[caracter];
                }
        
                if (value2 && c < lenght) {
                    c++;

                    let caracter = floor(random()*26);
                    password += listCaracter.lowercase[caracter];
                }
        
                if (value3 && c < lenght) {                    
                    c++;


                    let caracter = floor(random()*10);
                    password += listCaracter.numbers[caracter];
                }
        
                if (value4 && c < lenght) {                    
                    c++;

                    let caracter = floor(random()*7);
                    password += listCaracter.symbols[caracter];
                }
            }

        $generate.value = password;
    }

    generateHash(...checkAllBox());
}

