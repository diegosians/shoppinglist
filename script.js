let button = document.getElementById("enter");
let editButton = document.getElementById("edit")
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let getItDoneToday = document.getElementById("first")
let save = document.getElementById("save")

function changeText() {
	let id = document.getElementById("first")
	if (id.textContent === "Per oggi fatto") { id.textContent = "Mostra ancora" }
	else { id.textContent = "Per oggi fatto" }
}

function rmDelButton() {

	let delButton = document.querySelectorAll('.btn.btn-danger')

	for (var i = 0; i < delButton.length; i++) {
		delButton[i].remove()
	}
}

function saveList() {
	input.disabled = false
	switchList()
	rmDelButton()
}

function switchList() {
	if (document.getElementsByTagName("li")[0].children.length === 1) {
		let allDelButton = document.querySelectorAll('.btn.btn-danger')
		let li = document.getElementsByTagName("li")

		for (let index = 0; index < li.length; index++) {
			allDelButton[index].removeEventListener("click", allDelButton[index].remove)
		}


		rmDelButton()
		return
	}
}

function editList() {


	input.disabled = true

	switchList()



	let li = document.getElementsByTagName("li")

	for (let i = 0; i < li.length; i++) {

		let delButton = document.createElement("input")
		delButton.type = "button"
		delButton.value = "-"
		delButton.className = "btn btn-danger"
		delButton.id = "delButton" + i
		li[i].append(delButton)
	}

	let allDelButton = document.querySelectorAll(".btn.btn-danger")

	allDelButton[0].addEventListener("click", () => { allDelButton[0].parentElement.remove() })
	allDelButton[1].addEventListener("click", () => { allDelButton[1].parentElement.remove() })
	allDelButton[2].addEventListener("click", () => { allDelButton[2].parentElement.remove() })
	allDelButton[3].addEventListener("click", () => { allDelButton[3].parentElement.remove() })
	allDelButton[4].addEventListener("click", () => { allDelButton[4].parentElement.remove() })
	allDelButton[5].addEventListener("click", () => { allDelButton[5].parentElement.remove() })
	allDelButton[6].addEventListener("click", () => { allDelButton[6].parentElement.remove() })
	allDelButton[7].addEventListener("click", () => { allDelButton[7].parentElement.remove() })
	allDelButton[8].addEventListener("click", () => { allDelButton[8].parentElement.remove() })
	allDelButton[9].addEventListener("click", () => { allDelButton[9].parentElement.remove() })
	allDelButton[10].addEventListener("click", () => { allDelButton[10].parentElement.remove() })
	allDelButton[11].addEventListener("click", () => { allDelButton[11].parentElement.remove() })


}




function inputLength() {
	return input.value.length;
}


function createListElement() {
	var liMax = document.getElementsByTagName("li")
	if (liMax.length === 12) { alert("Hai raggiunto il limite massimo della lista!"); return }
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.className = "list-group-item"
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toOnOffUl() {


	switch (ul.style.display) {
		case "none": ul.style.display = ""; editButton.disabled = false; input.disabled = false; save.disabled = false; button.disabled = false
			break
		default: ul.style.display = "none"; editButton.disabled = true; input.disabled = true; rmDelButton(); save.disabled = true; button.disabled = true
	}

}



editButton.addEventListener("click", editList)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

getItDoneToday.addEventListener("click", toOnOffUl);


