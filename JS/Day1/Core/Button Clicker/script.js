
function Logout(element){
    if(element.innerText=="Login") {
        element.innerText="Logout";
    }
    else {
        element.innerText = "Login";
    }
}

function Alerte(){
    alert("Ninja was liked!");
}

function Delete(element){
    element.remove();

}