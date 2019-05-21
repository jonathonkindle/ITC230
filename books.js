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
    },

    get: (title) => {
        return books.find((item) => {
            return item.title === title;
        });
    },

    delete: (title) => {

    },

    add: (title) => {

    }

};



// $(document).ready(function(){
//     $(".search-btn").on("click", function(){
//         $.get(books, function() {
//             //need to collect the input from input tag to quantify the search and set "all" equal to return all items in the books array.
//             for (let i = 0; i < books.length; i++) {
//                     books += '<li>' + '{title:} ' + 'By: ' + '{author:}: ' + '{price:}' +'</li>';
//             }
//         });
//     });
//     $(".add-btn").on("click", function(){

//     });
//     $(".delete-btn").on("click", function(){

//     });

//     const bookList = () => {
//         $.get(books, function() {
//             var bookData = books;
//             for (let i = 0; i < bookData.length; i++) {
//                     bookData += '<li>' + '{title:} ' + 'By: ' + '{author:}: ' + '{price:}' +'</li>';
//             }
//         });
//     };
// });

// need to use inner html on the <ul> </ul> to populate items into the list on the search.html page.




//ES6 Syntax
// const getAll = () => {
//         return books
//     };

//     someFunction = (someParam) => {

//     }

// //ES5 Syntax
// // function getAll() {}