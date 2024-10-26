// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
	// Створюємо масив з голосними
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	// Створюємо порожній рядок для збереження результату
	let result = '';
	
	for (let char of str) {
	  // Якщо символ є голосною, додаємо '*' до результату, інакше додаємо сам символ
	  if (vowels.includes(char)) {
		result += '*';
	  } else {
		result += char;
	  }
	}
	
	return result;
  }

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;