var books = [
    {title: 'Effective Java: Third Edition', author: 'Joshua Bloch', price: 43.86},
    {title: 'Eloquent Javascript: Third Edition', author: 'Marijn Haverbeke', price: 25.31},
    {title: 'Web Developement with MongoDB and Node: Third Edition', author: 'Bruno Joseph D\'mello', price: 39.99},
    {title: 'JavaScript, The Good Parts', author: 'Douglas Crockford', price: 15.52},
    {title: 'Learning Python: 5th Edition', author: 'Mark Lutz', price: 21.96}
];

module.exports = {
    getAll: () => {
        return books
    }
};


//ES6 Syntax
// const getAll = () => {
//         return books
//     };

//     someFunction = (someParam) => {

//     }

// //ES5 Syntax
// // function getAll() {

// // }

// module.exports = {
//     getAll
// //     someFunction,
// //     books
// }