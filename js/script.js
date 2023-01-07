const lettersCode = ['ai', 'enter', 'imes', 'ober', 'ufat'];
const letters = ['a', 'e', 'i', 'o', 'u'];

const text = document.getElementById('input-text');
const result = document.getElementById('result');
const info = document.getElementById('info');
const btnCopy = document.getElementById('btn-copy');

const encriptar = text => {
    text = text.split('');
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if (text[i] == letters[j]) {
                text[i] = lettersCode[j];
            }
        }
    }

    return text.join('');
}

const desencriptar = text => {
    return text
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

const validar = text => {
    return (text == 0) ? false : true;
}

const btnEncriptar = () => {
    const textResult = text.value.toLowerCase();
    if (validar(textResult)) {
        result.innerText = encriptar(textResult);
        info.classList.add('hidden');
        btnCopy.style.display = 'block';
    } else {
        alert('ingrese texto para encriptar');
    }
}

const btnDesencriptar = () => {
    const textResult = text.value.toLowerCase();
    textResult.toLowerCase();
    if (validar(textResult)) {
        result.innerHTML = desencriptar(textResult);
        info.classList.add('hidden');
        btnCopy.style.display = 'block';
    } else {
        alert('ingrese texto para desencriptar');
    }
}

const copyToClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(result.innerHTML);
    return Promise.reject("The Clipboard API is not available.");
};