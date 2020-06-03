// OBJECT DESTRUCTURING

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


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher

// console.log(publisherName)


// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

// const [, city, state,] = address

// console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [product, , medium, ] = item

console.log(`A medium ${product} costs ${medium}`)

