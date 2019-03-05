// Your code goes here
let links = document.getElementsByClassName("nav-link");
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", function(){
      links[i].style.color = "red";
    })

    links[i].addEventListener("mouseout", function(){
      links[i].style.color = "black";
    })
}
