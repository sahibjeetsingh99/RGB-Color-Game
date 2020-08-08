var numSquares = 6
var color = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var clickedDisplay = document.querySelector("h1 span")
var message = document.querySelector("#guess")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")


reset.addEventListener("click",function(){
	easyButton.classList.remove("btncolor")
	hardButton.classList.remove("btncolor")
	reset.classList.add("btncolor")
	//get random colors
	color = generateRandomColors(numSquares);
	//pick color
	pickedColor = pickColor();
	//change colorDisplay
	clickedDisplay.textContent = pickedColor;
	//array to get random colors
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor = color[i]

	}
	//change heading background color
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "NEW COLORS"
	message.textContent = "";

})

easyButton.addEventListener("click",function(){
	easyButton.classList.add("btncolor")
	hardButton.classList.remove("btncolor")
	reset.classList.remove("btncolor")
	reset.textContent = "NEW COLORS"
	message.textContent = ""
	h1.style.backgroundColor = "steelblue"
	numSquares = 3
	color = generateRandomColors(numSquares)
	pickedColor = pickColor();
	clickedDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.backgroundColor = color[i];
		}
		else{
			squares[i].style.display = "none"
		}
	}
})

hardButton.addEventListener("click",function(){
	hardButton.classList.add("btncolor")
	easyButton.classList.remove("btncolor")
	reset.classList.remove("btncolor")
	reset.textContent = "NEW COLORS"
	h1.style.backgroundColor = "steelblue"
	message.textContent = ""
	numSquares = 6
	color = generateRandomColors(numSquares)
	pickedColor = pickColor();
	clickedDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++){
	
			squares[i].style.backgroundColor = color[i];
			squares[i].style.display = "block"
		}
		
	
})


clickedDisplay.textContent = pickedColor

for( var i = 0;i<squares.length;i++){
	squares[i].style.backgroundColor = color[i];

	squares[i].addEventListener("click",function(){
		reset.classList.remove("btncolor")
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor,pickedColor)
		if(clickedColor === pickedColor){
			message.textContent = "CORRECT"
			changeColor(clickedColor)
			h1.style.backgroundColor = clickedColor
			reset.textContent = "PLAY AGAIN!"
		}
		else{
			this.style.backgroundColor = "#232323"
			message.textContent = "TRY AGAIN"
		}
	});
}

function changeColor(color){
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function generateRandomColors(num){
	var arr = []

for(var i = 0;i<num;i++){
	arr.push(randomColors())
}

return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", "+ g + ", "+ b + ")";
}

	
