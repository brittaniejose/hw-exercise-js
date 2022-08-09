let good = .2;
let fair = .15;
let bad = .1;

function totalAmount (subTot, justification) {
    return subTot * justification + subTot;
} 
console.log(totalAmount(50, fair));