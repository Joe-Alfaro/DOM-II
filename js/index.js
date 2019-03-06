// Your code goes here
// HELPER FUNCTION(S)
function getRandomColor() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

//MOUSEOVER
const links = document.getElementsByClassName("nav-link");
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", function(){
      links[i].style.color = "red";
    })

    links[i].addEventListener("mouseout", function(){
      links[i].style.color = "black";
    })
}

//KEYDOWN
const input = document.getElementsByTagName('html');
const output = document.createElement("p");
const target = document.getElementsByClassName("container home");

target[0].append(output);

input[0].addEventListener('keydown', function(e){
  output.textContent += ` ${e.key}`;
})

//WHEEL


//DRAG/DROP


//LOAD


//FOCUS
const pics = document.getElementsByTagName("img");
window.addEventListener('focus', function(e){
  for(let i = 0; i < pics.length; i++){
    pics[i].style.filter = "blur(0px)";
  }
})
window.addEventListener('blur', function(e){
  for(let i = 0; i < pics.length; i++){
   pics[i].style.filter = "blur(5px)";
  }
})

//RESIZE


//SCROLL


//SELECT


//DBLCLICK
let paragraphText = document.getElementsByTagName('p');
for(let i = 0; i < paragraphText.length; i++){
  paragraphText[i].addEventListener("dblclick", function(){
    paragraphText[i].style.color = getRandomColor();
  })
}
