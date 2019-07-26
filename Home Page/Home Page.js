// import {fileDir, localURL, APICaller, getAllTournament} from "../Constants/Constants.js";
// import * as myConstants from "../Constants/Constants.js";

let tournaments = [];
console.log("http://localhost:8080/JavaEE-Project-JackLawthom/api/Tournament/getAll");
makeRequest("GET", "http://localhost:8080/JavaEE-Project-JackLawthom/api/Tournament/getAll").then((value) => {
    tournaments = value;
    console.log(tournaments);
    createPage()
});

function createPage() {
    if (!tournaments) {
        tournaments = [];
    }        
    for (let i of tournaments) {
        let cardDiv = createEl("div", null, "tournament-board", JSON.stringify(i), "card bg-light border-dark mx-5 mb-5", null, "width: fit-content; display: inline-block");
        let cardHeader = createEl("div", cardDiv, null, null, "card-header");
        let cardText = createEl("div", cardHeader, null, null, null, i.tournamentName, "cursor: pointer");
        cardText.addEventListener('click', () => loadTournament(cardDiv));
        deleteBtn(cardHeader);
    }
}

function deleteBtn (nameDiv) {
    let nameBtn = createEl("button", nameDiv, null, null, "close");
    nameBtn.innerHTML = '<span aria-hidden="true">&times;</span>';
    nameBtn.setAttribute("onclick", "deleteTournament(this.parentNode.parentNode, this)");
}

function deleteTournament(delEl) {
    makeRequest("DELETE", "http://localhost:8080/JavaEE-Project-JackLawthom/api/Tournament/delete/" + JSON.parse(delEl.id).tournamentId).then(() => {
        window.location.href = "file:///E:/QA%20Consulting/Project%20-%20Tournament%20Trees/JavaScript-Project-JackLawthom/Home%20Page/Home%20Page.html";
    })
}

function newTournament() {
    sessionStorage.setItem("noOfTournaments", tournaments.length);
    window.location.href = "file:///E:/QA%20Consulting/Project%20-%20Tournament%20Trees/JavaScript-Project-JackLawthom/New%20Tournament/New%20Tournament.html";
}

function loadTournament(data) {
    console.log(data)
    sessionStorage.setItem("tournamentId", JSON.stringify(JSON.parse(data.id).tournamentId));
    window.location.href = "file:///E:/QA%20Consulting/Project%20-%20Tournament%20Trees/JavaScript-Project-JackLawthom/Tournament%20Tree/Tournament%20Tree.html";
}
