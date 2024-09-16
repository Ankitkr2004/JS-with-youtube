// Javascript Execution Context
//{}-> Global EC
// - Global Execution Context
// - Function Execution Context
// - Eval Execution Context

// {}-> Memory creation phase
//   -> Execution phase

let val1=10
let val2= 5
function addNum(n1,n2){
    let total=n1+n2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10,2)

// 1) Global execution->this
// 2) Memory Phase
// val1->undefined, val2->undefined
// addnum-> defination
// result1 -> undefined
// result2 -> undefined
// 3)Execution Phase
//   val1-> 10
//   val2->5
//   addnum-> new variable environment + execution thread
// 

