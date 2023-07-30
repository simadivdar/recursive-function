var pascalCasedObject = {};
function solve(kebabCaseObject) {
    console.log(typeof(kebabCaseObject))
    if (typeof (kebabCaseObject) !== Object) {
        console.log(kebabCaseObject);
        console.log("hiiiiiiiiiiiiiiiiiiiiiii")
        return pascalCasedObject;
    }
    for (var key in kebabCaseObject) {
        //console.log(kebabCaseObject[key])
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
        console.log(pascalCasedObject);
        console.log(key);
        return pascalCasedObject + solve(key);
    }
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