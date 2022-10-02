//varible

let bot = document.querySelector("#btn");
let quote = document.querySelector('.qoit');
let person =document.querySelector(".person");

const qoutes = [{
    quote :'Data capture, management and revenue streams, and protect the integrity of their competitions. '
    ,
    person : 'Adel Elbamby '

},{
   
    quote : 'Everything a sportsbook operator needs to manage the finest live sports data available.'
    ,
    person : 'Adel Ramadan '
}, {
    quote : 'Fully automated streaming technology, product sports to the world'
    ,
    person : 'Adel Ramadan'
},{

    quote : 'Everything a sportsbook operator needs to managby the finest live sports data available.'
    ,
    person : 'Adel Ramadan '
},
{
    quote : 'Everything a sportsbook operator needs to  the finest live sports data available.'
    ,
    person : 'Adel Ramadan '
},
];

bot.addEventListener('click',function () {
    let random = Math.floor(Math.random() * qoutes.length);
    quote.innerText = qoutes[random].quote;
    person.innerText = qoutes[random].person;
})
