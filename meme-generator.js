
/*function generateMeme() {
	canvas.appendChild(img);
	canvas.width = img.width;
	canvas.height = img.height;
	ctx = canvas.getContext('2d')
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0);
}*/

/*function loadImage() {
	const image = new Image();
	image.onload = () => {
	image.src = imageInput
	generateMeme()
	}			
}*/


	//var newDiv = document.createElement("div");
		//newDiv.className = "purple"
		//section.appendChild(newDiv);

/* window.onload = function() {
	var todoForm = document.getElementById("newTodoForm");
	var todoList = document.getElementById("todoList")

	todoForm.addEventListener("submit", function(event) {
		event.preventDefault();

		var removeButton = document.createElement("button");
		removeButton.innerText = "X";
		
		var newTodo = document.createElement("li");
		newTodo.innerText = document.getElementById("task").value

		todoList.appendChild(newTodo);
		newTodo.appendChild(removeButton);

		todoForm.reset();
	})

	todoList.addEventListener("click", function(event) {
		if (event.target.tagName.toLowerCase() === 'li') {
			event.target.style.textDecoration = "line-through";
		} 
		else if (event.target.tagName.toLowerCase() === 'button') {
			event.target.parentNode.remove();
		}
	})
} */

window.onload = function() {
	var memeForm = document.getElementById("meme-form");
	var memeContainer = document.getElementById("meme-container");

	memeForm.addEventListener("submit", function(event) {
		event.preventDefault();
		var img = document.createElement("img");
		img.src = document.getElementById("image-url").value;

		var newMeme = document.createElement("div");
		var topText = document.createElement("div");
		topText.textContent = document.getElementById("top-text").value;
		var bottomText = document.createElement("div");
		bottomText.textContent = document.getElementById("bottom-text").value;

		var removeButton = document.createElement("button");
		removeButton.innerHTML = "<a class=\"remove-button\" href=\"#\" id=\"delete\"> <img src=\"https://image.flaticon.com/icons/svg/69/69381.svg\" style=\"width:40px;height:40px;\"> </a>";

		newMeme.classList.add("meme-div-style");
		topText.classList.add("top-text-style");
		bottomText.classList.add("bottom-text-style");
		img.classList.add('img-style');
		
		removeButton.classList.add("overlay");

		newMeme.append(img);
		newMeme.append(topText);
		newMeme.append(bottomText);
		newMeme.append(removeButton);

		memeContainer.append(newMeme)

		memeForm.reset();

		removeButton.addEventListener("click", function(event) {
			memeContainer.removeChild(newMeme);
		})
	})

}