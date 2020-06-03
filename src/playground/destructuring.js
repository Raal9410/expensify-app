// const person = {
//     name: 'Raul',
//     age: 26 ,
//     location: {
//         city: 'Mexico City',
//         temp: 19
//     }
// }

// const {name, age, location} = person

// const {city} = location

// console.log(`${name} is ${age} years old. And lives in ${city}.`)


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher

console.log(publisherName)