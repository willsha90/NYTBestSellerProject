// DEPENDENCIES
var book = $('.title-image');

// Get data from NYT best sellers API
var nytBase = "https://api.nytimes.com/svc/books/v3";
// var nytPath = "/lists/names.json?bestsellers-date=2009-04-28&";
// Searches for book with specific title
// var nytPath = "/lists/best-sellers/history.json?title=Change of Heart&";
// Gets list from specified date and section, includes image
var nytPath = "/lists/2019-01-20/hardcover-fiction.json?";
var nytKey = "api-key=tZmSouJCKxYwB50PAcr0v6vFs6EI8yNm";
var nytSecret = "OeaEEqlPYBWtKSxa"
function getNYT() {
    var nytURL = nytBase + nytPath + nytKey;
    fetch(nytURL, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            bookImg = data.results.books[0].book_image;
            book.attr("src", bookImg);
        });
}

// Fetch data from Open Library API
function getLibrary() {
    //covers.openlibrary.org/b/id/9096878-L.jpg 2x
    var imageURL = "http:books.google.com/books/content?id=QVn-CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api";
    var bookImageURL = "https://storage.googleapis.com/du-prd/books/images/9780765326355.jpg";
    var libraryURL = "https://openlibrary.org/works/OL45883W.json";
    var googleBookURL = "https://www.googleapis.com/books/v1/volumes?q=wayofking"
    fetch(googleBookURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            book.attr("src", imageURL);
        });
}

// Runs function to get data from NYT api
getNYT();
getLibrary();


// true/false 
function questionyes1() {
    document.getElementById('questiona').innerHTML = "Correct! BOOKX is NYT best-seller!";
    document.getElementById('questiona').style.color = "green";
  }
  
  function questionno1() {
    document.getElementById('questiona').innerHTML = "Wrong! BOOKX is not a NYT best-seller!";
    document.getElementById('questiona').style.color = "red";
  }
  
  function questionyes2() {
    document.getElementById('questionb').innerHTML = "Correct! BOOKX is NYT best-seller!";
    document.getElementById('questionb').style.color = "green";
  }
  
  function questionno2() {
    document.getElementById('questionb').innerHTML = "Wrong! BOOKX is not a NYT best-seller!";
    document.getElementById('questionb').style.color = "red";
  }
  
  function questionyes3() {
    document.getElementById('questionc').innerHTML = "Correct! BOOKX is NYT best-seller!";
    document.getElementById('questionc').style.color = "green";
  }
  
  function questionno3() {
    document.getElementById('questionc').innerHTML = "Wrong! BOOKX is not a NYT best-seller!";
    document.getElementById('questionc').style.color = "red";
  }
  
  function questionyes4() {
    document.getElementById('questiond').innerHTML = "Correct! BOOKX is NYT best-seller!";
    document.getElementById('questiond').style.color = "green";
  }
  
  function questionno4() {
    document.getElementById('questiond').innerHTML = "Wrong! BOOKX is not a NYT best-seller!";
    document.getElementById('questiond').style.color = "red";
  }


// connect button to 
var elQuestion = queryselector // input html div for question
var elanswer = queryselector // input html div for user answer
var btnUserYes = document.querySelector ("#userSaysYes");
var btnUserNo = document.querySelector ("#userSaysNo");

btnUserYes.addEventListener("click");
btnUserYNo.addEventListener("click");
