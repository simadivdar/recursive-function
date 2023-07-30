var mapped = {};
function mapObject(obj) {
    //console.log(obj);
    if (typeof obj !== "object" || obj === null) {
        //  console.log("sima")
        return obj;
    }
    for (var key in obj) {
        //  console.log("sima3")
        // console.log(mapped[reza])
        //  console.log(typeof (obj[key]))
        mapped[camp(key)] = obj[key];
        if (typeof obj[key] === "object") {
            //  console.log('sima4');
            mapped[camp(key)]=mapObject(obj[key]);
            
        }
        //  console.log(obj[key])
        // console.log(reza)
    }
    return mapped;
}
var pascalCasedObject = {};
function camp(value) {
    if (typeof (value) === "string" ) {
        //  console.log("sima2")
        //console.log(value);
        let vay = value.split("-");
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
        pascalCasedObject[pay2] = employees[value];
        //  console.log(pay2);
        //console.log(pascalCasedObject);
        return pay2;
    }
    else {
        //  console.log("sima5")
        return value;
    }

};
const employees = {
    "bradley-paucek": [
        "Ignacio Connelly",
        "richard-morissette",
        { "johanna-nitzsche": 143 },
        null
    ],
    "ron-grant": {
        "kenneth-turner": 90686
    }
};
const uppercaseValues = mapObject(employees);
console.log(uppercaseValues);
console.log((employees["bradley-paucek"][0])instanceof Number)