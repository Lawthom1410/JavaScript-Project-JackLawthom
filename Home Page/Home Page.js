// Nav Paths
for (let i of document.getElementsByClassName("href-home")) {
    i.setAttribute("href", FILE_DIR + HOME_HTML);
}
for (let i of document.getElementsByClassName("href-account")) {
    i.setAttribute("href", "#");
}

let tournaments = [];
makeRequest("GET", LOCAL_URL + API_CALLER + GET_TOURNAMENT).then((value) => {
    tournaments = value;
    createPage()
});

function createPage() {
    if (!tournaments) {
        tournaments = [];
    }        
    for (let i of tournaments) {
        let cardDiv = createEl("div", null, "tournament-board", JSON.stringify(i), "card bg-light border-dark mx-5 mb-5", null, "width: fit-content; display: inline-block");
        let cardHeader = createEl("div", cardDiv, null, null, "card-header my-card-header");
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
    makeRequest("DELETE", LOCAL_URL + API_CALLER + DEL_TOURNAMENT + JSON.parse(delEl.id).tournamentId).then(() => {
        window.location.href = FILE_DIR + "Home%20Page/Home%20Page.html";
    })
}

function newTournament() {
    sessionStorage.setItem("noOfTournaments", tournaments.length);
    window.location.href = FILE_DIR + "New%20Tournament/New%20Tournament.html";
}

function loadTournament(data) {
    console.log(data)
    sessionStorage.setItem("tournamentId", JSON.stringify(JSON.parse(data.id).tournamentId));
    window.location.href = FILE_DIR + "Tournament%20Tree/Tournament%20Tree.html";
}
