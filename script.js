// DEPENDENCIES
var book = $('.title-image');
var titleEl = $("#title-caption")
var btnUserYes = $("#userSaysYes");
var btnUserNo = $("#userSaysNo");
var scoreEl = $("#score");
var score = 0;

var bookIndex = 0;
var ourBooks = [
    {
        title: "Where the Red Fern Grows",
        isbn: "044022814X"
    },
    {
        title: "Where the Wild Things Are",
        isbn: "9780812413748"
    },
    {
        title: "Empire of Pain",
        isbn: "9781529062489"
    },
    {
        title: "The Day the Crayons Quit",
        isbn: "9780605711662"
    },
    {
        title: "To Kill a Mockingbird",
        isbn: "9780397001514"
    },
    {
        title: "The Beautiful Poetry of Donald Trump",
        isbn: "9781786894724"
    },
    {
        title: "War and Peace",
        isbn: "9780393042375"
    },
    {
        title: "The Diary of a Young Girl",
        isbn: "9780141315188"
    },
    {
        title: "Animal Farm",
        isbn: "9780140059618"
    },
    {
        title: "The Way of Kings",
        isbn: "9780765326355"
    },
    {
        title: "Name of the Wind",
        isbn: "9780756404079"
    },
    {
        title: "The Giver",
        isbn: "9780395645666"
    },
    {
        title: "The Art of the Deal",
        isbn: "9780394555287"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        isbn: "9780747532699"
    },
    {
        title: "A Promised Land",
        isbn:  "9781524763169"
    },
    {
        title: "On Earth We're Briefly Gorgeous",
        isbn: "9780525562023"
    },
    {
        title: "My Year of Rest and Relaxation",
        isbn: "9780525522119"
    },
    {
        title: "Ghost Wall",
        isbn: "9781783784455"
    },
    {
        title: "Trick Mirror",
        isbn: "9780525510543"
    },
    {
        title: "Camera Lucida",
        isbn: "9782070205417"
    },
    {
        title: "Me Talk Pretty One Day",
        isbn: "9780316777728"
    },
    {
        title: "Myra Breckinridge",
        isbn: "9780586029220"
    },
    {
        title: "Line of Beauty",
        isbn: "9780330483209"
    },
    {
        title: "Invisible Cities",
        isbn: "9780151452903"
    },
    {
        title: "Autobiography of Red",
        isbn: "9780375401336"
    }
];



//generate book data element
btnUserYes.click(function() {
    bookIndex++ 
    titleEl.text(ourBooks[bookIndex].title);
    score++
    scoreEl.text(score)
    
    console.log("button click");
})

//fix title container to standard size
// add element for score
// update css


// after click, show pop up of right or wrong
    //also interval for directions in swiping
// score counter
// advance book
// 



// Checks if specified book is in NYT best sellers API
async function checkNYT(searchType, searchBook) {
    var nytBase = "https://api.nytimes.com/svc/books/v3";
    // Searches for book with specific title or ISBN
    if (searchType === "title") {
        var nytPath = "/lists/best-sellers/history.json?title=" + searchBook;
    } else if (searchType === "isbn") {
        var nytPath = "/lists/best-sellers/history.json?isbn=" + searchBook;
    } else {console.log("No search type included for checkNYT")};
    var nytKey = "&api-key=tZmSouJCKxYwB50PAcr0v6vFs6EI8yNm";
    var nytURL = nytBase + nytPath + nytKey;
    // Fetch data from NYT API
    var response = await fetch(nytURL, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    })
    var data = await response.json()
    
    console.log(data);
    if (data.results.length === 0) {
        return false;
    } else {
        return true;
    }
}


// Fetch data from Open Library API
function getLibrary() {
    // Get book cover using its ISBN code
    // var bookImageURL = "https://storage.googleapis.com/du-prd/books/images/9780765326355.jpg";
    var openLibImage = "http://covers.openlibrary.org/b/isbn/9780765326355-L.jpg";
    // Get book data from library API
    var libraryURL = "https://openlibrary.org/works/OL45883W.json";
    // var googleBookURL = "https://www.googleapis.com/books/v1/volumes?q=wayofking"
    fetch(libraryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            book.attr("src", openLibImage);
        });
}

// Runs function to get data from NYT api
var booksIndex = 9;
var bool = checkNYT(ourBooks[booksIndex].isbn)
if (bool) {
    console.log(ourBooks[booksIndex].title + " IS A NYT BEST SELLER");
} else {
    console.log(ourBooks[booksIndex].title + " NOT ON LIST");
}
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
// var elQuestion = queryselector // input html div for question
// var elanswer = queryselector // input html div for user answer


// btnUserYes.addEventListener("click");
// btnUserYNo.addEventListener("click");


