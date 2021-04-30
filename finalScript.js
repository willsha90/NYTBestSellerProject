// DEPENDENCIES
listSelect = $("#userbook");
listBtn = $("#listBtn");
titleInput = $("#bname");
isbnInput = $("#isbn");
searchBtn = $("#submit-new-book");
bookImg = $(".book-cover");
infoDump = $("#book-title");

// FUNCTIONS
function getListBook(event) {
    event.preventDefault();
    // console.log(listSelect.val());
    var title = listSelect.val();
    getLibrary(title);

    checkNYT("title", title)
    .then((bool) => {
        if (bool) {
            infoDump.text(title + " is a NYC best seller!");
        } else {
            infoDump.text(title + " is not on NYT list.");
        }
    })
}

function searchBook(event) {
    event.preventDefault();
    if (titleInput.val()) {
        console.log(titleInput.val());
        var title = titleInput.val();
        getLibrary(title);
        checkNYT("title", title)
        .then((bool) => {
            if (bool) {
                infoDump.text(title + " is a NYC best seller!");
            } else {
                infoDump.text(title + " is not on NYT list.");
            }
        })
    } else if (isbnInput.val()) {
        console.log(isbnInput.val());
        var isbn = isbnInput.val();
        checkNYT("isbn", isbn)
        .then((bool) => {
            if (bool) {
                infoDump.text(title + " is a NYC best seller!");
            } else {
                infoDump.text(title + " is not on NYT list.");
            }
        })
    }
}

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
    // Get book data from library API
    var googleBookURL = "https://www.googleapis.com/books/v1/volumes?q=" + bookISBN;
    fetch(googleBookURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // book.attr("src", openLibImage);
            bookImg.attr("src", data.items[0].volumeInfo.imageLinks.thumbnail);
        });
}

// EVENT LISTENER
listBtn.on("click", getListBook);
searchBtn.on("click", searchBook);