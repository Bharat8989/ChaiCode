// //select an html element by id and change its text content
let demoElement = document.getElementById("demo");
        demoElement.innerHTML = "Hello, world!";
        console.log(demoElement);

//class

// const backgroundColorElements = document.getElementsByClassName("color");

for (let i = 0; i < backgroundColorElements.length; i++) {
    backgroundColorElements[i].innerHTML = "Background color";
    backgroundColorElements[i].style.backgroundColor = "red";
}