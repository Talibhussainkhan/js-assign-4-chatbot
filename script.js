let ul = document.getElementById("message");
let input = document.getElementById("input");

function message(){
    let inputValue = input.value;
    console.log(inputValue)
    if(inputValue == "hello" || inputValue == "Hello" || inputValue == "HELLO" || inputValue == "Hello!" || inputValue == "Hi" || inputValue == "hi" ){
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(()=>{
            ul.innerHTML += `<li class="bot-message"><p>Hello! How can I assist you today? 😊</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if(inputValue == "Javascript" || inputValue == "Js" || inputValue == "js" || inputValue == "JS" || inputValue == "What is js" || inputValue == "what is js" || inputValue == "What is javascript" || inputValue == "What is Javascript" || inputValue == "javascript"){
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(()=>{
            ul.innerHTML += `<li class="bot-message"><p>JS (JavaScript): A programming language for web development, used for both client-side and server-side scripting.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if(inputValue == "Why use JS?" || inputValue == "use of js" || inputValue == "js used for"){
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(()=>{
            ul.innerHTML += `<li class="bot-message"><p>JS (JavaScript): To make websites interactive and dynamic.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if(inputValue == "What is a variable?" || inputValue == "variables" || inputValue == "variable used for" || inputValue == "variable"){
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(()=>{
            ul.innerHTML += `<li class="bot-message"><p>A container for storing data values.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is JS?" || inputValue == "JS" || inputValue == "JavaScript" || inputValue == "What is JavaScript?") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A programming language for web development.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is a function?" || inputValue == "function" || inputValue == "function in JS" || inputValue == "JS function") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A block of code designed to perform a specific task.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is an array?" || inputValue == "array" || inputValue == "array in JS" || inputValue == "JS array") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A collection of items stored in a single variable.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is DOM?" || inputValue == "DOM" || inputValue == "Document Object Model" || inputValue == "What is Document Object Model?" || inputValue == "dom" || inputValue == "Dom") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>The Document Object Model, representing web page structure.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is an event?" || inputValue == "event" || inputValue == "event in JS" || inputValue == "JS event") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>An action like a click or keypress that triggers code.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is let?" || inputValue == "let" || inputValue == "let in JS" || inputValue == "JS let") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A keyword to declare block-scoped variables.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is ===" || inputValue == "===" || inputValue == "strict equality" || inputValue == "JS ===") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A strict equality operator comparing value and type.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is console.log()?" || inputValue == "console.log" || inputValue == "console.log in JS" || inputValue == "JS console.log") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A method to print output to the console.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is Node.js?" || inputValue == "Node.js" || inputValue == "Node" || inputValue == "What is Node?") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A runtime environment to run JavaScript on the server.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }
    else if (inputValue == "What is a loop?" || inputValue == "loop" || inputValue == "loop in JS" || inputValue == "JS loop") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A way to repeatedly execute a block of code.</p></li>`;
            saveData();
        }, 1000);
        saveData();
    }else if (inputValue == "What is a string?" || inputValue == "string" || inputValue == "string in JS" || inputValue == "JS string") {
        ul.innerHTML += `<li class="user-message"><p>${inputValue}</p></li>`;
        setTimeout(() => {
            ul.innerHTML += `<li class="bot-message"><p>A sequence of characters used to represent text.</p></li>`;
            saveData(); 
        }, 1000);
        saveData();  
    }else if (inputValue == ""){
        alert("Input box was Empty")
    }else {
        alert("Please check spelling and only ask me about JS.");
    }
    input.value = "";
}

function clearData(){
    localStorage.clear();
    window.location.reload()
}

function saveData (){
     localStorage.setItem("data", ul.innerHTML)
}
function setData (){
   ul.innerHTML = localStorage.getItem("data")
}
function getPerviousData(){
    setData()
}
