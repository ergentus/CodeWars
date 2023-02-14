const str = "a".repeat(139);

function generateHashtag (str) {

    const spaceTest = str.replace(/[^a-z]+/gi, '');
    if (!(Boolean(spaceTest)) || spaceTest.length >= 140) return false
    
    let arr = str.split(' ');
  
    if (arr[0] === '') arr.shift();
    
    arr = arr.map((el => el.charAt(0).toUpperCase() + el.slice(1))).join(' ');
    
    const hash = arr.replace(/[^a-z]+/gi, '');

    return `#${hash}`
}

console.log(generateHashtag(str))