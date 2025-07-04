const inputBox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value ===''){
        alert("You must write something here!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value
        li.classList.add("animate-in")
        listcontainer.appendChild(li) 
        let span = document.createElement("span")
        span.innerHTML='\u00d7';
        li.appendChild(span)
    }
    inputBox.value=" "
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
   else if(e.target.tagName === "SPAN"){
    //  e.target.parentElement.remove()
    let li = e.target.parentElement;
    li.classList.add("fade-out");
    setTimeout(()=>{
        li.remove();
        saveData();
    },3000);
   }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")
}

showTask()