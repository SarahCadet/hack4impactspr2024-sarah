console.log("Hello World");
//print out all of the projects
const projects = document.querySelector(".project");
console.log(projects);
//changing the name
const myName = document.querySelector("#my-name");
myName.textContent = "Sarah Cadet";
let numberOfClicks = 0;
function changeNameColorBasedOnParity(){

  numberOfClicks++;
  if(numberOfClicks%2 == 0){
    myName.style.color = "blue";
  } else{
    myName.style.color = "orange";
  }
}
myName.addEventListener("click", changeNameColorBasedOnParity);
//getting elements by Class Name returns an array/list of elements. 
//Have to loop through all of them
const buttons = document.getElementsByClassName("buttonGithub");
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function () {
    window.open("https://github.com");
  });
}
const linkedinImg = document.querySelector("#linkedin-img");
linkedinImg.addEventListener("click", function(){
window.open("https://linkedin.com");
});

const gitHubImg = document.querySelector("#github-img");
gitHubImg.addEventListener("click", function(){
window.open("https://github.com");
});
