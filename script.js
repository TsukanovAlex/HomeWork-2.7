// Задание № 1

const str = 'Привет! Как дела?';
console.log(str.toUpperCase());

// Задание № 2

const animals = ['Кошка', 'Кит', 'Комар', 'Носорог','Котопес'];
const fructs = ['Яблоко', 'Груша', 'Лимон', 'Апельсин'];
const building = ['Дом', 'Банк', 'Больница', 'Театр'];
const result = [];

function search (array, search) {
    const arr = [];
    array.forEach(array => {
    if (array.toLowerCase().startsWith(search.toLowerCase())) {
        arr.push(array);
    }
});
return console.log(arr);
}

search(animals, 'ко');
search(fructs,'гру');
search(animals,'Кино');

// Задание № 3

const a = 32.58884;

console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));