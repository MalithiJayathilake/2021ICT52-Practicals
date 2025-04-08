const fs = require('fs').promises;

const readFile=(filepath)=>{
    return fs.readFile('file1.txt','utf8') //return a promise
}

readFile('file1.txt').then(()=>{
    console.log(data)
})

.catch((err)=>{
    console.error(err);
})

