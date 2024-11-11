// Задача: Напишіть функцію sumArray, яка приймає масив чисел і 
// повертає їхню суму. Використовуйте цикл для обчислення суми.

function sumArray(numbers) {
    let sum = 0;      // Змінна для зберігання суми
    let i = 0;        // Індекс для перебору масиву

    // Використовуємо цикл while для сумування елементів
    while (i < numbers.length) {
        sum += numbers[i]; // Додаємо поточний елемент до суми
        i++;               // Збільшуємо індекс
    }

    return sum; // Повертаємо загальну суму
}

//console.log(sumArray([1, 2, 3, 228, 5])); // 239

module.exports = sumArray;