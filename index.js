// Create and return a new div element to enclose the comment
function createEnclosingDiv() {
	let enclosingDiv = document.createElement("div");
	enclosingDiv.classList.add("comment");
	return enclosingDiv;
}

// Create and return a new span element for the avatar with the provided initials
function createAvatar(initials) {
	let newAvatar = document.createElement("span");
	newAvatar.innerText = initials;
	newAvatar.classList.add("avatar");
	return newAvatar;
}

// Create and return a new span element for the comment text
function createText(text) {
	let newText = document.createElement("span");
	newText.classList.add("text");
	newText.innerText = text;
	return newText;
}

// Reset input fields after adding a comment
function resetFields() {
	document.getElementById("initials").value = "";
	document.getElementById("commentText").value = "";
}

// Add a new comment to the comment section
function addComment() {
	let commentsDiv = document.getElementById("commentSection");
	let initialsInput = document.getElementById("initials").value;
	let textInput = document.getElementById("commentText").value;

	// Create elements for the new comment
	let enclosingDiv = createEnclosingDiv();
	let avatar = createAvatar(initialsInput);
	let text = createText(textInput);
	
	// Append elements to the enclosing div and add to the comment section
	enclosingDiv.appendChild(createAvatar(initialsInput));
	enclosingDiv.appendChild(createText(textInput));
	commentsDiv.appendChild(enclosingDiv);
	
	// Reset input fields
	resetFields();
}
