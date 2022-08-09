let good = .2;
let fair = .15;
let bad = .1;

function tipAmount (subTot, justification) {
   return subTot * justification;
}
console.log(tipAmount(100, bad));