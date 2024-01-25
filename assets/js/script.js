let checkTextSend = ''

const textArea = document.querySelector('.inputText');
const convert1 = document.querySelector('.convert1');
const convert2 = document.querySelector('.convert2');

function start() {
    buttons();
}

function cryptography(encrypting, decrypting) {
    let textEncrypt = encrypting;
    const filterA = /a/g; const filterE = /e/g; const filterI = /i/g;
    const filterO = /o/g; const filterU = /u/g;

    const arrayEncrypt = [filterA, filterE, filterI, filterO, filterU]
    const wordEncrypt = ['0', '1', '2', '3', '4']

    let returnEncrypt = '';
    const filter0 = /0/g; const filter3 = /3/g;
    const filter1 = /1/g; const filter4 = /4/g;
    const filter2 = /2/g;

    const arraySuport = [filter0, filter1, filter2, filter3, filter4];
    const wordSuport = ['ai', 'enter', 'imes', 'ober', 'ufat'];

    let textDecrypt = decrypting;
    const filterAi = /ai/g; const filterEnter = /enter/g;
    const filterImes = /imes/g; const filterOber = /ober/g;
    const filterUfat = /ufat/g;

    const arrayDecrypt = [filterAi, filterEnter, filterImes, filterOber, filterUfat];
    const wordDecrypt = ['a', 'e', 'i', 'o', 'u'];

    function encrypt(regex, palavra) {
        textEncrypt = textEncrypt.replaceAll(regex, palavra);
        return returnEncrypt = textEncrypt;
    }

    function suport(regex, palavra) {
        return returnEncrypt = returnEncrypt.replaceAll(regex, palavra);
    }

    function decrypt(regex, palavra) {
        return textDecrypt = textDecrypt.replaceAll(regex, palavra);
    }


    for (let index = 0; index < arrayEncrypt.length; index++) {
        encrypt(arrayEncrypt[index], wordEncrypt[index]);
    }

    for (let index = 0; index < arrayDecrypt.length; index++) {
        suport(arraySuport[index], wordSuport[index]);
    }

    for (let index = 0; index < arrayDecrypt.length; index++) {
        decrypt(arrayDecrypt[index], wordDecrypt[index]);
    }

    return { returnEncrypt, textDecrypt }
}

function checkTexts() {
    let transformText = checkTextSend.replaceAll(/[A-Z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/g, 'istoehnumberoumaiuscula');
    let checkText = transformText.includes('istoehnumberoumaiuscula');

    return checkText
}

function buttons() {
    let inputText = document.querySelector('.inputText');
    let currentText = document.querySelector('.currentText');

    const btnEncrypt = document.querySelector('.encrypt');
    const btnDecrypt = document.querySelector('.decrypt');
    const btnCopy = document.querySelector('.copy')

    btnEncrypt.addEventListener('click', () => {

        checkTextSend = inputText.value
        if (checkTexts() === false) {
            const encrypt = cryptography(`${inputText.value}`, ``);
            currentText.innerHTML = `<p>${encrypt.returnEncrypt}</p>`;
            inputText.value = '';
        } else currentText.innerHTML = 'Apenas letras minúsculas e sem acento.';
    })

    btnDecrypt.addEventListener('click', () => {
        checkTextSend = inputText.value;
        if (checkTexts() === false) {
            const decrypt = cryptography(``, `${inputText.value}`);
            currentText.innerHTML = decrypt.textDecrypt;
            inputText.value = '';
        } else currentText.innerHTML = 'Apenas letras minúsculas e sem acento.';
    })

    btnCopy.addEventListener('click', (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(currentText.textContent);
        currentText.innerHTML = '';
        addLogo();
        
    })
}

function addLogo() {
    convert1.style.display = 'none';
    convert2.style.display = 'flex';
}

function removeLogo() {
    convert2.style.display = 'none';
    convert1.style.display = 'flex';
}

textArea.addEventListener('keyup', () => {
    (textArea.value.length === 0) ? addLogo() : removeLogo();
})

textArea.addEventListener('click', () => {
    (textArea.value.length === 0) ? addLogo() : removeLogo();
})


start();

