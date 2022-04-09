// api url
const api_url = "http://localhost:3001/services";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	// console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
window.onload = getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {

	let tab =
		`<tr>
		<th>Name</th>
		<th>Description</th>
		<th>Price</th>
		<th>Image</th>
		</tr>`;

	//Loop to access all rows
	Object.entries(data).forEach(([key, value]) => {
	tab += `<tr>
		<td>${value.name} </td>
		<td>${value.description}</td>
		<td>${value.price}</td>
		<td><img src=${value.img} alt="Image" width="200" height="200"></td>		
	</tr>`;
	});

	// Setting innerHTML as tab variable
	document.getElementById("employees").innerHTML = tab;
}