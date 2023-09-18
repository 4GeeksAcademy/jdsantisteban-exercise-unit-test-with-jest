const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("1.2 dollars should be 127.9 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)

    // if 1.2 dollars are 127.9 yens, then 3.5 dollars should be (3.5 * 127.9 / 1.2)
    const expected = (3.5 * 127.9 / 1.2); 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(374); //1.2 dollars are 127.9 yens, then 3.5 dollars should be = (3.5 * 127.9 / 1.2)
});

test("127.9 yens should be 0.8 british pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromYenToPound(3.5)

    // if 127.9 yens are 0.8 british pound, then 1000 yens should be (1000 * 0.8 / 127.9)
    const expected = (1000 * 0.8 / 127.9); 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(7); //127.9 yens are 0.8 british pound, then 1000 yens should be (1000 * 0.8 / 127.9)
});