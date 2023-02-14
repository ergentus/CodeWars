const str = " Hello there thanks for trying my Kata";

function generateHashtag (str) {

    const spaceTest = str.replace(/[^a-z]+/gi, '');

    if (spaceTest.length < 1 || spaceTest.length + 1 > 140) return false
    
    const arr = str.split(' ').map((el => el.charAt(0).toUpperCase() + el.slice(1))).join(' ');

    const hash = arr.replace(/[^a-z]+/gi, '');

    return `#${hash}`
}

console.log(generateHashtag(str))