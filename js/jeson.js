// JavaScript Object Notation
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringigied = JSON.stringify(user);
// console.log(user);
// console.log(stringigied);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    product: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'Actor',
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);