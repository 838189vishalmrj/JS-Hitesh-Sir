const accountId = 123454
let accountEmail = "vishal@gmail.com"
var accountPassword = "123454"
let accountCity = "Gorakhpur"
let accountState; // it will return undefined
countyName = "India"
/*
Prefer not to use var
because of issue in block scope and function

*/


// accountId = 2 // not allowed
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,countyName,accountState])