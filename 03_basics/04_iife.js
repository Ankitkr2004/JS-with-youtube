//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( function aurcode() {
    console.log(`DB connectrd Two`);
} )();

( (name) => {
    //unname IIFE
    console.log(`DB connectrd Two ${name}`);
} )('ankit')

