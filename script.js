const table = document.querySelector("table");

let names = [];
let students;
// fetch("studMarks.json")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		students = data;
// 		data.forEach((element) => {
// 			if (!names.includes(element.Name)) {
// 				names.push(element.Name);
// 			}
// 		});
// 		names.forEach((name) => {
// 			let mark = students.reduce((acc, curr) => {
// 				if (name == curr.Name) {
// 					acc += curr.Marks;
// 				}
// 				return acc;
// 			}, 0);

// 			// console.log(name, mark);
// 			let str = `<tr><td>${name}</td>
// 			<td>${mark}</td></tr>`;
// 			table.innerHTML += str;
// 		});
// 	});

fetch("studMarks.json")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		localStorage.setItem("data", JSON.stringify(data));
	});

students = JSON.parse(localStorage.getItem("data"));
students.forEach((element) => {
	if (!names.includes(element.Name)) {
		names.push(element.Name);
	}
});
names.forEach((name) => {
	let mark = students.reduce((acc, curr) => {
		if (name == curr.Name) {
			acc += curr.Marks;
		}
		return acc;
	}, 0);

	let str = `<tr><td>${name}</td>
		<td>${mark}</td></tr>`;
	table.innerHTML += str;
});
