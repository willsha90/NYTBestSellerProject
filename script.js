
// Get data from NYT best sellers API
var nytBase = "https://api.nytimes.com/svc/books/v3";
var nytPath = "/reviews.json?author=Stephen+King&api-key=";
var nytPath1 = "/lists/names.json?";
var nytPath2 = "/lists/best-sellers/history.json?";
var nytPath3 = "/lists/overview.json?";
var nytKey = "api-key=tZmSouJCKxYwB50PAcr0v6vFs6EI8yNm";
var nytSecret = "OeaEEqlPYBWtKSxa"
function getNYT() {
    var nytURL = nytBase + nytPath3 + nytKey;
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
        });
}

getNYT();