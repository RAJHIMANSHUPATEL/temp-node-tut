const { readFileSync, writeFileSync } = require('fs');

console.log("Start")

const first = readFileSync('./content/first.txt','utf8' )
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first)
console.log(second)

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: "a" }, )

// flag: "a" is used to append tho the existing file and not overwrite it.

console.log('done with the task')
console.log('starting the next one')