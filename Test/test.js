var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
vegetables.forEach((item, index) => { console.log(item, index) });
var shallowCopy = vegetables.slice(); // this is how to make a copy
shallowCopy.forEach((item, index) => { console.log(item, index) });
vegetables.pop();
vegetables.forEach((item, index) => { console.log(item, index) });
shallowCopy.forEach((item, index) => { console.log(item, index) });