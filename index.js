const intBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (intBox.value === '') {
        alert("Write  something");
    }else{
        let li = document.createElement("li");
        li.innerHTML =intBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    intBox.value="";
    saveData()
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }{

    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();