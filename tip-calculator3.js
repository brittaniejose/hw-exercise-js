let good = .2;
let fair = .15;
let bad = .1;

function splitAmount (subTot, justification, splitNum) {
    return (subTot * justification + subTot ) / splitNum;
}
console.log(splitAmount(100, good, 5));