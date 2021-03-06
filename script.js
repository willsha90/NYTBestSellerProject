// DEPENDENCIES
var book = $('.title-image');
var titleEl = $("#title-caption")
var btnUserYes = $("#userSaysYes");
var btnUserNo = $("#userSaysNo");
var scoreEl = $("#score");
var score = 0;
var incorrectEl = $("#incorrect-answer");
var correctEl = $("#correct-answer");
var scoreboardEl = $("#scoreboard");

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
        isbn: "0399255370"
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
        isbn: "0756404746"
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
        isbn: "0590353403"
    },
    {
        title: "A Promised Land",
        isbn:  "0525633766"
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
        isbn: "0374532338"
    },
    {
        title: "Me Talk Pretty One Day",
        isbn: "	0349113912"
    },
    {
        title: "Myra Breckinridge",
        isbn: "0525566503"
    },
    {
        title: "Line of Beauty",
        isbn: "1582346100"
    },
    {
        title: "Invisible Cities",
        isbn: "0156453800"
    },
    {
        title: "Autobiography of Red",
        isbn: "9780375401336"
    }
];



//generate book data element


btnUserYes.click(function() {
    endGame();
    scoreboardEl.attr("style", "display:none");
    correctEl.attr("style", "display:none");
    incorrectEl.attr("style", "display:none");
    checkNYT("title", ourBooks[bookIndex].title)
    .then((bool) => {
        if (bool) {
            score++
            scoreEl.text(score)
            scoreboardEl.attr("style", "display:block");
            correctEl.attr("style", "display:block");
            console.log(ourBooks[bookIndex].title + " IS A NYT BEST SELLER");
        } else {
            scoreboardEl.attr("style", "display:block");
            incorrectEl.attr("style", "display:block")
            console.log(ourBooks[bookIndex].title + " NOT ON LIST");
        }
        
    });
    console.log("button click");
    bookIndex++ 
    titleEl.text(ourBooks[bookIndex].title);
    getLibrary(ourBooks[bookIndex].isbn);
})

btnUserNo.click(function() {
    endGame();
    scoreboardEl.attr("style", "display:none");
    correctEl.attr("style", "display:none");
    incorrectEl.attr("style", "display:none");
    checkNYT("title", ourBooks[bookIndex].title)
    .then((bool) => {
        if (!bool) {
            score++
            scoreEl.text(score)
            scoreboardEl.attr("style", "display:block");
            correctEl.attr("style", "display:block");
            console.log(ourBooks[bookIndex].title + " IS A NYT BEST SELLER");
        } else {
            scoreboardEl.attr("style", "display:block");
            incorrectEl.attr("style", "display:block")
            console.log(ourBooks[bookIndex].title + " NOT ON LIST");
        }
        
    });
    console.log("button click");
    bookIndex++ 
    titleEl.text(ourBooks[bookIndex].title);
    getLibrary(ourBooks[bookIndex].isbn);
})

function endGame () {
    if (bookIndex === ourBooks.length -1) {
        window.location.replace("finalscreen.html");
    }
}


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
    if (data.results.length > 0) {
        return true;
    } else {
        return false;
    }
}


// Fetch data from Open Library API
function getLibrary(bookISBN) {
    // Get book cover using its ISBN code
    var openLibImage = "http://covers.openlibrary.org/b/isbn/" + bookISBN + "-L.jpg";
    // Get book data from library API
    var libraryURL = "https://openlibrary.org/works/OL45883W.json";
    var googleBookURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookISBN;
    fetch(googleBookURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // book.attr("src", openLibImage);
            book.attr("src", data.items[0].volumeInfo.imageLinks.thumbnail);
        });
}

// Runs function to get data from NYT api
// var booksIndex = 1;
// var bool = checkNYT();
// checkNYT("title", ourBooks[booksIndex].title)
//     .then((bool) => {
//         if (bool) {
//             console.log(ourBooks[booksIndex].title + " IS A NYT BEST SELLER");
//         } else {
//             console.log(ourBooks[booksIndex].title + " NOT ON LIST");
//         }
//     });
// getLibrary(ourBooks[booksIndex].isbn);


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

$("#scoreEl").html(score);
$("#finalScore").html(score);


// INITIALIZATIONS
getLibrary(ourBooks[bookIndex].isbn);
titleEl.text(ourBooks[bookIndex].title);


