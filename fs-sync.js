
const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/text.txt','utf-8');
const second = readFileSync('./content/secondtext.txt','utf-8')


writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`)