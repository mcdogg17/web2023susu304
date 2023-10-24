"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)
// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    // Разбиваем строку на слова
    const words = fio.split(" ");
    // Извлекаем первое слово как Имя
    const firstName = words[1];
    // Извлекаем последнее слово как Фамилию
    const lastName = words[0];
    // Возвращаем строку "Имя Фамилия"
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    // Используем Set для создания коллекции уникальных элементов
    const uniqueSet = new Set(array);
    // Преобразуем Set обратно в массив и возвращаем его
    return Array.from(uniqueSet);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    // Используем метод .reduce для нахождения максимальной и минимальной зарплаты
    const maxSalary = array.reduce((max, current) => (current > max ? current : max), array[0]);
    const minSalary = array.reduce((min, current) => (current < min ? current : min), array[0]);

    // Возвращаем отношение максимальной зарплаты к минимальной
    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }

    // Добавить слово и его толкование в словарь
    addWord(word, definition) {
        if (typeof word === "string" && typeof definition === "string") {
            this.dictionary.set(word, definition);
        }
    }

    // Получить толкование слова из словаря
    getDefinition(word) {
        return this.dictionary.get(word);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};