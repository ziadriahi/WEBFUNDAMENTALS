var likes = [9,12,9];
var elements = [
    document.querySelector("#pub-1"),
    document.querySelector("#pub-2"),
    document.querySelector("#pub-3")
];

function Like(index){
    likes[index]++;
    elements[index].innerHTML= likes[index] + " like(s)";

}