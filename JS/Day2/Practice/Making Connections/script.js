
function edit(){
    var h1text = document.querySelector("#name");
    h1text.innerHTML="Riahi Zied";
}


function Remove() {
    var nbreq = document.querySelector("#connreq-nbre").innerText;
    nbreq--;
    document.querySelector("#connreq-nbre").innerText= nbreq;
    var user = document.getElementById("new-user");
    user.remove();
}

function Add(){
    var nbconn = document.querySelector("#y-conn-nbre").innerText;
    Remove();
    nbconn++;
    document.querySelector("#y-conn-nbre").innerText= nbconn;
    
}