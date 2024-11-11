// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
    let result = '';
    
    // Проходимо через кожен символ рядка з кінця до початку
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        // Перевіряємо, чи не є символ цифрою
        if (char < '0' || char > '9') {
            result += char; // Додаємо символ до результату
        }
    }
    
    return result;
}

module.exports = reverseWithoutNumbers;

//console.log(reverseStringSkippingDigits("abc123def456")); // "fedcba"