// typeof → check data types
console.log(typeof 'aman');
console.log(typeof('Aman' + 3));


// string concatenation → combine text with values
console.log('&' + 28.94);
console.log('Items (' + (1 + 1) + ')');


// arithmetic calculation → perform numeric operations
console.log((20.95 * 100 + 7.99 * 100) / 100);


// combine string + calculation → display result
console.log('$' + (20.95 * 100 + 7.99 * 100) / 100);
console.log('Items (' + (1 + 1) + '): $' + (20.95 * 100 + 7.99 * 100) / 100);


// escape characters → handle special symbols
console.log('i\'m learning JavaScript');
console.log('some\ntext');


// template literals → cleaner string + expression handling
console.log(`hello`);
console.log(`Items (${1 + 1}): $${(20.95 * 100 + 7.99 * 100) / 100}`);


// improvement → in real projects, avoid manual *100 tricks for money
// use proper formatting
console.log(`$${(20.95 + 7.99).toFixed(2)}`);

