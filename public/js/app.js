const bookTextid = document.getElementById("bookId");
const btn1 = document.getElementById("btn1");
let out2 = document.getElementById("output2");
let myImg = document.getElementById("bookImg");



function myBookId(){
    let myValue =  bookTextid.value

    
    let covers = `http://covers.openlibrary.org/b/isbn/${myValue}-L.jpg`

    document.getElementById("bg-hero").style.backgroundImage = `url(${covers})` 
   console.log( document.getElementById("bg-hero"))
}


