const buttonClick = document.getElementById("button");
const listeeClass = document.querySelector("#input-field");

const addListItem = function() {
    const unorderedList = document.querySelector("ul");
    const newListItem = document.createElement("li");
    newListItem.style.color = "white";
    newListItem.style.fontSize = "26px";
    newListItem.innerText = listeeClass.value;
    unorderedList.appendChild(newListItem);
    listeeClass.value = "";
}

buttonClick.addEventListener('click', addListItem);
listeeClass.addEventListener('keyup', function(event) {
    if (event.which === 13) {
        addListItem();
    }
})