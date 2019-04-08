var btn = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// Create new list
function createNewList(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value= "";
	var btn1 = document.createElement("button");
	btn1.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn1);
	btn1.onclick = removeList;
}
// Add list after click
function addListAfterClick(){
	if(inputLength()>0){
		createNewList();
	}
}

// Add list after press
function addListAfterPress(event){
	if(inputLength()>0 && event.keyCode === 13){
		createNewList();
	}
}
// input length
function inputLength(){
	return input.value.length;
}

// Remove list
function removeList(event){
	event.target.parentNode.remove();

}
// delete button
// function deleteBtn(){
// 	var btn1 = document.createElement("button");
// 	btn1.appendChild(document.createTextNode("Delete"));
// 	li.appendChild(btn1);
// 	btn1.onclick = removeList;
// }

// Toggle
ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle("done");
}

// calling function
btn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterPress);
