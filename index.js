const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//function to create notes
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

//function to delete the notes
notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes.forEach(element=>{
            element.addEventListener("onkeyup",updateStorage);
        });
    }
});

//function to save the notes in the localStorage
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//function to display the saved notes
function showNotes(){
    
}