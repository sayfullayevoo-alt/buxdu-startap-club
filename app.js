let stage = localStorage.getItem("stage")

if(!stage){
stage = 1
localStorage.setItem("stage",1)
}

document.getElementById("stageText").innerText =
"Siz hozir " + stage + "-bosqichdasiz"

function submitIdea(){

let idea = document.getElementById("idea").value

if(idea.length > 3){

localStorage.setItem("stage",2)

alert("Tabriklaymiz! Siz 2-bosqichga o'tdingiz")

location.reload()

}else{

alert("G'oyani yozing")

}

}

let stage = localStorage.getItem("stage")

if(!stage){
    stage = 1
    localStorage.setItem("stage",1)
}

document.getElementById("stageText").innerText =
"Siz hozir " + stage + "-bosqichdasiz"


function submitIdea(){

let idea = document.getElementById("idea").value

if(idea.length > 3){

localStorage.setItem("stage",2)

alert("Tabriklaymiz! Siz 2-bosqichga o'tdingiz")

location.reload()

}else{

alert("Iltimos g'oyangizni yozing")

}

function saveIdea(){

let idea = document.getElementById("ideaText").value;

if(idea === ""){
alert("G'oya yozing!");
return;
}

localStorage.setItem("startupIdea", idea);

alert("G'oya saqlandi!");

}
const checkboxes = document.querySelectorAll('.stage input[type="checkbox"]');
const steps = document.querySelectorAll('.step');

checkboxes.forEach((checkbox, index) => {

checkbox.addEventListener("change", () => {

if(checkbox.checked){
checkbox.closest(".stage").classList.add("completed");
steps[index].classList.add("active");
}else{
checkbox.closest(".stage").classList.remove("completed");
steps[index].classList.remove("active");
}

});

});

