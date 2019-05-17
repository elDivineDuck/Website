

/* function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,0.001);
} */

window.addEventListener("keypress", checkKeyPress, false);

function checkKeyPress(key){
    if (key.keyCode == "13"){
    pass();
    
    }
}

function pass() {
var passWord = document.getElementById("pwd").value
console.log(passWord);
if (passWord == "Fuck off"){
    stylesheet1.disabled = true;
    disableTxt();
    var d = document.getElementById("pwd");
    d.className += " pwdAnimation";
    /* pageScroll() */
    scrollWin()
    
    
    /* var objDiv = document.getElementById("shopbodyid");
    objDiv.scrollTop = objDiv.scrollHeight; */
    

    /* document.getElementById('txt1').style.animation = "text 2s 1"; 
    */
}




else {
    alert("fuck off Steve")
}}

function scrollWin() {
    window.scrollTo(0, 1000);
}
function disableTxt(){
    var textBox = document.getElementById("pwd")
    document.getElementById("pwd").value='';
    textBox.setAttribute('readonly', 'readonly');
    

}

function TestExample(){
var greeting = "Hi! My name is Harry";
console.log(greeting);

}

function TestExample(){
    alert("Fuck me nigger")
    
    }


var stylesheet1 = document.styleSheets[1];

/*
function Underline() {
    var element = ("#pwd");

        element.addClass("pwdAnimation");
        alert("fuck u nigga") }*/


/* function MouseRollover(MyImage) {
            MyImage.src = "EternalEraFront.png";
 }
 function MouseOut(MyImage) {
            MyImage.src = "EternalEraBack.png";
 }
 */
 function hover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
  }