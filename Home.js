const hrefComptrak = document.getElementsByClassName("href-comptrak");
for (let el of hrefComptrak) {
    el.addEventListener("click", () => comptrak());
}

function comptrak() {
    window.location = "CompTrak/Login/Login.html";
}

function comptrakPresentation() {
    window.location.href = "https://docs.google.com/presentation/d/1x1LCUDU5GT9P1XOsPQrl2tO_ilhvt25GRmobt9yCel8/edit?usp=sharing";
}

function roboticArm(){
    window.location = "Robotic Arm 2/Home.html";
}