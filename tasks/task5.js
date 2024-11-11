// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.

function countOccurrences(str, char) {
    let count = 0; // Змінна для підрахунку кількості символів
    let i = 0;     // Індекс для перебору рядка

    // Проходимо через рядок
    while (i < str.length) {
        if (str[i] === char) {
            count++; // Збільшуємо лічильник, якщо символ знайдено
        }
        i++; // Збільшуємо індекс
    }

    return count; // Повертаємо кількість використань символу
}

//console.log(countOccurrences("enterprice", "e")); // 2

module.exports = countOccurrences;