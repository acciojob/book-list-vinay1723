//your JS code here. If required.

const table_Body = document.getElementById("book-list");

const button = document.getElementById("submit");
const inputs = document.getElementsByTagName("input");

button.addEventListener('click',(e) => {
	e.preventDefault();
	let table_row = document.createElement("tr");
	for (let input of inputs) {
		let table_data = document.createElement("td");
		
		table_data.textContent = input.value;
		table_row.appendChild(table_data);
	}
     
	const delete_data = document.createElement("td");
	const delete_btn = document.createElement("button");
	delete_btn.textContent = "❌";
	delete_btn.className = "delete";
	delete_data.appendChild(delete_btn);
	table_row.appendChild(delete_data);
    table_Body.appendChild(table_row);

	for (let input of inputs) {
		input.value = "";
	}
});

table_Body.addEventListener('click',(e) => {
	if (e.target && e.target.classList.contains("delete")) {
		let row = e.target.closest("tr");
		row.remove();
	}
})
	