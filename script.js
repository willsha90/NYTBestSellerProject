// DEPENDENCIES
var book = $('.title-image');


var ourBooks = [
    {
        title: "Where the Red Fern Grows"
    },
    {
        title: "Where the Wild Things Are"
    },
    {
        title: "Empire of Pain"
    },
    {
        title: "The Day the Crayons Quit"
    },
    {
        title: "Temptation"
    },
    {
        title: "To Kill a Mockingbird"
    },
    {
        title: "The Beautiful Poetry of Donald Trump"
    },
    {
        title: "War and Peace"
    },
    {
        title: "The Diary of a Young Girl"
    },
    {
        title: "Hope a Magic Land"
    },
    {
        title: "Animal Farm"
    },
    {
        title: "The Way of Kings"
    },
    {
        title: "Name of the Wind"
    },
    {
        title: "The Giver"
    },
    {
        title: "The Art of the Deal"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone"
    },
    {
        title: "A Promised Land"
    },
    {
        title: "On Earth We're Briefly Gorgeous"
    },
    {
        title: "My Year of Rest and Relaxation"
    },
    {
        title: "Ghost Wall"
    },
    {
        title: "Trick Mirror"
    },
    {
        title: "Camera Lucida"
    },
    {
        title: "Me Talk Pretty One Day"
    },
    {
        title: "Myra Breckinridge"
    },
    {
        title: "Line of Beauty"
    },
    {
        title: "Invisible Cities"
    },
    {
        title: "Autobiography of Red"
    }
]
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
            // console.log(data);
            bookImg = data.results.books[0].book_image;
            book.attr("src", bookImg)
        });
}

// Fetch data from Open Library API
function getLibrary() {
    var libraryURL = "https://openlibrary.org/works/OL45883W.json";
    fetch(libraryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
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