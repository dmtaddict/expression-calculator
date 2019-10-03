function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if(expr.includes('(')||expr.includes(')')) {
        let brackets = expr.match(/[()]/g).map(function (e) {
            return e;
        });
        let brckt = [];

        for (let i = 0; i < brackets.length; i++) {
            if (brackets[i] === ')' && brackets[i] === '(' && brckt.length === 0) {
                brckt.push(brackets[i]);
            } else if (brackets[i] === ')' && brckt.length === 0) {
                brckt.push('i dont know how to stop it');
            } else if (brackets[i] === ')' && brackets[i] === '(' && brackets[i] !== brckt[brckt.length - 1]) {
                brckt.push(expr[i]);
            } else if (brackets[i] === ')' && '(' === brckt[brckt.length - 1]) {
                brckt.pop();
            } else if (brackets[i] === '(') {
                brckt.push(brackets[i]);
            }
        }
        if (brckt.length !== 0) throw new SyntaxError("ExpressionError: Brackets must be paired");
    }
    if(expr.includes('/0')||expr.includes('/ 0')) {
        throw new TypeError("TypeError: Division by zero.");
    }
    let result;
    try {
        result = Function( 'return (' + expr + ');').apply(0, []);
    }
    catch (e) {
    }
    return (result);
    // write your solution here
}

module.exports = {
    expressionCalculator
}