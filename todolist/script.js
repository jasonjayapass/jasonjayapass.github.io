// CREATING THE CLOSE BUTTONS FOR LIST THAT ARE NOT CREATED WITH THE MAIN FUNCTION
var myList = document.getElementsByTagName("li");
var index;
for (index = 0; index < myList.length; index++) {
	var aSpanTag = document.createElement("SPAN");
	var someText = document.createTextNode("\u00D7");
	aSpanTag.className = "close";
	aSpanTag.appendChild(someText);
	myList[index].appendChild(aSpanTag);
}

// CLOSE BUTTON
var closeButton = document.getElementsByClassName("close")
for (i = 0; i < closeButton.length; i++) {
	closeButton[i].onclick = function() {
		var theDiv = this.parentElement;
		theDiv.style.display = "none";
	}
}

var ulList = document.querySelector("ul");
ulList.addEventListener('click', function(event) {
	console.log(event);
	if (event.target.tagName === "LI") {
		event.target.classList.toggle('checked');
	}
}, false)

// CREATING TO DO FUNCTION

function createNewElement() {
	var li = document.createElement('li');
	var theInputValue = document.getElementById("the-input").value;
	var textNode = document.createTextNode(theInputValue);
	li.appendChild(textNode);

	if (theInputValue === '') {
		alert("Hey, This Cannot Be Empty")
	} else {
		document.getElementById("the-ul").appendChild(li);
	}

	document.getElementById("the-input").value = "";

	var thePanTag = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	thePanTag.className = "close";
	thePanTag.appendChild(txt);
	li.appendChild(thePanTag)

	// REMOVING ITEMS WHEN CLICK ON SPAN CLOSE BUTTON

	for (i = 0; i < closeButton.length; i++) {
		closeButton[i].onclick = function() {
			var theDiv = this.parentElement;
			theDiv.style.display = "none";
		}
	}
}