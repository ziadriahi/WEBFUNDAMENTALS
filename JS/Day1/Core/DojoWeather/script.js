

function message(){
    alert("Loading weather report ...");
}

function hide(){
    var element=document.querySelector("#main-footer");
    element.remove();
 
}

function add(elt){
    var value=Number(elt.innerText)+32;
    elt.innerText=value;
    
}

function substract(elt){
    var value=Number(elt.innerText)-32;
    elt.innerText=value;
    
}

function change(element){
    for(i=1;i<5;i++){
        var max=document.getElementById("max"+i);
        var min=document.getElementById("min"+i);
        if(element.value=="Farenheit"){
            add(max);
            add(min);
        }
        else{
            substract(max);
            substract(min);
        }
    }

}