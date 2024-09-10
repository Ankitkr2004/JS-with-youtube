const accountId = 1444 
let accountEmail= "ankit@google.com"
var accountPassword ="12345"
accountCity="Bokaro"
let accountState;
// accountId =2

accountEmail="hcsgoogle@.com"
accountPassword ="23425345"
accountCity="Bihar"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
/* prefer not to use var because of issue in block scope and 
functional scope */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])