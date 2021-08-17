// kata1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testeReverseString2() {
    let result = reverseString(" ");
    let expected = " ";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testeReverseString3() {
    let result = reverseString("6485");
    let expected = '5846';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function reverseString(a){
    return a.split('').reverse().join('');
}

//kata2
function testReverseSentence1() {
    let result = reverseSentence("bob likes dogs");
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseSentence2() {
    let result = reverseSentence("meu nome é jõao");
    let expected = "jõao é nome meu";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testReverseSentence3() {
    let result = reverseSentence("'4 64 8'");
    let expected = "8 64 4";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function reverseSentence(a){
    return a.split(' ').reverse().join(' ');
}

//kata3
function testMinimumValue1() {
    let result = reverseString([2,3,5,9]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMinimumValue2() {
    let result = reverseString([8,3,7,11]);
    let expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function minimumValue(a){
    return a.sort((a,b)=>a-b)[0]
}

//kata4
function testMaximumValue1() {
    let result = reverseString([2,3,5,9]);
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testMaximumValue2() {
    let result = reverseString([8,3,7,11]);
    let expected = 11;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function minimumValue(a){
    return a.sort((a,b)=>b-a)[0]
}

//kata5
function testCalculateRemainder1() {
    let result = reverseString(5,2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2() {
    let result = reverseString('a',2);
    let expected = NaN;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function calculateRemainder(a,b){
    return a%b
}

//kata6
function testDistinctValues1() {
    let result = distinctValues('ad25352tre');
    let expected = "a d 2 5 3 t r e";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2() {
    let result = distinctValues('dasdfaaaa');
    let expected = "d a s f";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function distinctValues(a){
    let output = []
    a = a.replace(/ /g, '')
    for (let i=0;i<a.length;i++){
        if (output.includes(a[i])===false){
            output.push(a[i])
        }
    }
    return output.join(' ')
}

//katas7
function testCountValues1() {
    let result = countValues('ad253a52tre');
    let expected = "a(2) d(1) 2(2) 5(2) 3(1) t(1) r(1) e(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testCountValues2() {
    let result = countValues('ashudfahsdf');
    let expected = "a(2) s(2) h(2) u(1) d(2) f(2)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function countValues(a){
    let output = []
    let element = []
    a = a.replace(/ /g, '')
    for (let i=0;i<a.length;i++){
        if (element.includes(a[i])===false){
            element.push(a[i])
        }
    }
    for (let i=0;i<element.length;i++){
        let count = a.split('').filter((a)=>a===element[i]).length;
        output.push(element[i]+`(${count})`)
    }
    return output.join(' ')
}

//katas8
function testEvaluateExpression1() {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
function testEvaluateExpression2() {
    let result = evaluateExpression("a + b - c / d", {a: 8, b: 2, c: 2, d: 2});
    let expected = "11";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testEvaluateExpression3() {
    let result = evaluateExpression("a + b - c * d", {a: 1, b: 2, c: 2, d: 2});
    let expected = "2"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function evaluateExpression(a,b){
    let m = a.replace(/ /g,'').split('')
    let output
    for (let i=0;i<m.length;i++){
        for (let prop in b){
            if (m[i]===prop){
                m[i]=b[prop]
            }
        }
    }
    output = Number(m[0])
    for (let j=1;j<m.length;j+=2){
        if (m[j]==='+'){
            output+= m[j+1]
        }
        if (m[j]==='-'){
            output-= m[j+1]
        }
        if (m[j]==='*'){
            output*= m[j+1]
        }
        if (m[j]==='/'){
            output*= m[j+1]
        }
    }
    return output
}
