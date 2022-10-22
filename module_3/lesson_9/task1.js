// Задание 1

const list = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];

const regx = /\w{1,}.js\w?/g;

const result = list.filter(item => item.match(regx));

console.log(result)


// Задание 2

const mail = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz'];

//const mail = 'my-mail@yandex.ru';

const regx2 = /^[\w]+@[a-z]{3,}.[a-z]{2,5}/gm;

const mailResult =  mail.filter(item => item.match(regx2));


console.log(mailResult)


// Задание 3

const text = `Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.`

const regx3 = /\([А-Яа-я :,]*\)/gi;

const resultText = text.match(regx3);


console.log(resultText)

const adress = ['Это был обычный урл http://site.ru', 'А этот был с com https://site.com как то так' ];

const regx4 = /(https?:\/\/[^\s]+)/g;

const resultArdess = adress.map(item => {
    return item.replace(regx4, (url) => {
        return `<a href='${url}'>${url.replace(/htt(p|ps):\/\//g, '')}</a>`
    })
        
})


console.log(resultArdess)
