// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.
function replaceVowels(input) {
    const vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let modifiedString = '';

    for (let char of input) {
        if (vowelList.includes(char)) {
            modifiedString += '*';
        } else {
            modifiedString += char;
        }
    }

    return modifiedString;
}

//console.log(replaceVowels("Hello, World!")); // H*ll*, W*rld!
module.exports = replaceVowels;