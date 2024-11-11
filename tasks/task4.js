// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
    if (numbers.length === 0) {
        return null; // Якщо масив порожній, повертаємо null
    }

    let max = numbers[0]; // Припускаємо, що перший елемент найбільший
    let i = 1;            // Починаємо з другого елемента

    // Проходимо через масив, щоб знайти найбільше число
    while (i < numbers.length) {
        if (numbers[i] > max) {
            max = numbers[i]; // Оновлюємо max, якщо знайдено більше число
        }
        i++; // Збільшуємо індекс
    }

    return max; // Повертаємо найбільше число
}

// Приклад використання
//console.log(findMax([228,1344])); // 1344

module.exports = findMax;