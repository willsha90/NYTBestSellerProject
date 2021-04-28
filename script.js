// DEPENDENCIES
var book = $('#bookImg');

// Get data from NYT best sellers API
var nytBase = "https://api.nytimes.com/svc/books/v3";
// var nytPath = "/reviews.json?author=Stephen+King&api-key=";
// var nytPath = "/lists/names.json?bestsellers-date=2009-04-28&";
// var nytPath = "/lists/best-sellers/history.json?title=Ocean Prey&";
// var nytPath = "/lists/overview.json?";
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
            book.prepend('<img id="theImg" src="' + bookImg + '" />')
        });
}

getNYT();