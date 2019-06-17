const fs = require('fs');
try {
    let readFile = fs.readFileSync('text.txt').toString();
    console.log(readFile)
} catch (error) {
    throw{
        error:'Loi, check file'
    }
}