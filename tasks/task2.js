// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
	// Масив для збереження символів, які не є цифрами
	const chars = [];
	
	for (let char of str) {
	  // Перевіряємо, чи символ не є цифрою
	  if (!(char >= '0' && char <= '9')) {
		chars.push(char);
	  }
	}
	
	// Зворотній порядок для масиву з символами і повернення рядка
	return chars.reverse().join('');
  }

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;