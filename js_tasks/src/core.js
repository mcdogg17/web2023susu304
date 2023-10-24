// Задача 1: Проверка на целое число
function isInteger(n) {
    return (n ^ 0) === n;
}

// Задача 2: Массив четных чисел от 2 до 20
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

// Задача 3: Сумма чисел до заданного значения (цикл)
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Задача 4: Сумма чисел до заданного значения (рекурсия)
function recSumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + recSumTo(n - 1);
    }
}

// Задача 5: Факториал числа
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Задача 6: Проверка на степень двойки
function isBinary(n) {
    return n !== 0 && (n & (n - 1)) === 0;
}

// Задача 7: N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Задача 8: Функция операции
function getOperationFn(initialValue, operatorFn) {
    if (!operatorFn) {
        return (newValue) => initialValue;
    }
    return (newValue) => {
        initialValue = operatorFn(initialValue, newValue);
        return initialValue;
    };
}

// Задача 9: Генератор арифметической последовательности
function sequence(start = 0, step = 1) {
    return function () {
        const current = start;
        start += step;
        return current;
    };
}

// Задача 10: Глубокое сравнение объектов
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) {
        return true;
    }

    if (typeof firstObject !== 'object' || typeof secondObject !== 'object') {
        return false;
    }

    const keysA = Object.keys(firstObject);
    const keysB = Object.keys(secondObject);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (
            !keysB.includes(key) ||
            !deepEqual(firstObject[key], secondObject[key])
        ) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
