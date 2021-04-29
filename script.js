// DEPENDENCIES
var book = $('.title-image');
var titleEl = $("#title-caption")
var btnUserYes = $("#userSaysYes");
var btnUserNo = $("#userSaysNo");

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
        title: "Empire of Pain: The Secret History of the Sackler Dynasty",
        isbn: "9781529062489"
    },
    {
        title: "The Day the Crayons Quit",
        isbn: "9780605711662"
    },
    // {
    //     title: "Temptation",
    //     isbn:
    // }, what book is this?^
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
    // {
    //     title: "Hope a Magic Land",
    //     isbn:
    // }, what book is this?^
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
        title: "Trick Mirror: Reflections on Self-Delusion",
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
    for (i=0 ; i<ourBooks.length; i++) {
        titleEl.text(ourBooks[i].title);
    }
    console.log("button click");
})

// after click, show pop up of right or wrong
// score counter
// advance book
// 



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


// connect button to 
// var elQuestion = queryselector // input html div for question
// var elanswer = queryselector // input html div for user answer


// btnUserYes.addEventListener("click");
// btnUserYNo.addEventListener("click");


