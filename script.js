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

// Задание № 4

const number = [52, 53, 49, 77, 21, 32];
const min = Math.min(...number);
const max = Math.max(...number);
console.log(min);
console.log(max);

// Задание № 5 

function randomNumber(min, max) {
    return Math.round(Math.random() * (min - max)) + max;  
}
console.log(randomNumber(1, 10));

// Задание № 6 

function randomNumber(n) {
    const arrRandomNumber = [];
    for (let i = 0; i < n / 2; i++) {
      arr.push(Math.floor(Math.random() * (n + 1)));
    }
    return arrRandomNumber;
  }
  console.log(randomNumber(10));

  // Задание № 7 

function randomNumber(a, b) {
    return Math.floor(Math.random() * (b - a) + a);    
 }
 console.log(randomNumber(3, 8));

 // Задание № 8

 let date = new Date;
 console.log(date);

 // Задание № 9 

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание № 10

function myDate(index) {
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    const dayOfWeek = daysOfWeek[index.getDay()];
    const day = index.getDate();
    const month = months[index.getMonth()];
    const year = index.getFullYear();
    const hours = index.getHours().toString().padStart(2, '0');
    const minutes = index.getMinutes().toString().padStart(2, '0');
    const seconds = index.getSeconds().toString().padStart(2, '0');
   
    return `Дата: ${day} ${month} ${year}: ${dayOfWeek} Время: ${hours}:${minutes}:${seconds}`;
    }
    const currentDate = new Date();
    console.log(myDate(currentDate));