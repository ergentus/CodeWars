const a = 'some stranGE WORDS';

const capsLetter = (string) => {
    let theWord = '';
    for (let i = 0; i < string.length; i++)  {
        if (string[i] === string[i].toUpperCase()) {
            theWord += string[i]
        }   
    }
    return theWord.replace(/\s/g, "");
}

console.log(capsLetter(a))

