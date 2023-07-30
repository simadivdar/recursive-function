var pascalCasedObject = {};
function solve(kebabCaseObject) {
	console.log(key)
	if (typeof (kebabCaseObject[key]) === Object) {
		console.log(key)
		solve(key);
		count++;
	}
	console.log(kebabCaseObject);
	let count = 1;
	console.log(kebabCaseObject)
	for (var key in kebabCaseObject) {
		//console.log(kebabCaseObject[key])
		console.log("hiiiiiiiiiiiiiiiiiiiiiii")
		let vay = key.split("-");
		let pay = [];
		vay.forEach(element => {
			//	console.log(element[0])
			let element1 = element[0].toUpperCase();
			//console.log(element1);
			let element2 = element.replace(element[0], element1);
			pay.push(element2);
		});
		//console.log(pay);
		var pay2 = pay.join("");
		pascalCasedObject[pay2] = kebabCaseObject[key];
		//console.log(pay2);
		//console.log(pascalCasedObject);
	}
	return pascalCasedObject;
}
const input = {
	"bradley-paucek": [
		"Ignacio Connelly",
		"richard-morissette",
		{ "johanna-nitzsche": 143 },
		null
	],
	"ron-grant": {
		"kenneth-turner": 90686
	}
}
console.log(solve(input));