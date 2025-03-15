const str = "hello world"
const reg = /^hello/.test(str)
console.log(reg)




const container = "orange, banana, apple , orange , tomato";
const matches = container.match(/orange/g);
console.log(matches);




const x = "orange, banana, apple , orange , tomato";
const matchAgain = [...x.matchAll(/apple/g)];
console.log(matchAgain);




const y = "i love icecream";
const newText = y.replace(/icecream/i, "chocolate");
console.log(newText);



const z = "one,two,three";
const spliting = z.split(/,\s*/);
console.log(spliting);




const x_one = "i love ramadan";
const test = x_one.search(/ramadan/i);
console.log(test);