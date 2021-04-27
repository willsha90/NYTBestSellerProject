
// Get data from NYT best sellers API
var nytBase = "https://api.nytimes.com/svc/books/v3";
var nytPath = "/reviews.json?author=Stephen+King&api-key=";
var nytKey = "W9jAKsLKDW0evuFLFufiJsZCcXL7A2F9";
var nytURL = nytBase + nytPath + nytKey;
function getNYT() {
    fetch(nytURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

getNYT();