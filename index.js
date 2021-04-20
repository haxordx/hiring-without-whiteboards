const fs = require('fs');
const _ = require('lodash');

let file = fs.readFileSync('./README.md', 'utf-8');
let lines = file.split('\n');

let csvHeader = 'Name, URL'

let csv = [csvHeader];
_.each(lines, (line) => {
    let parts = line.split('|');
    
    let webName = parts[0].split('](');

    let name = webName[0].replace('- [', '');

    url = '';
    if (webName[1]) {
        url = webName[1].replace(') ', '');
    }
   

    csv.push(`${name}, ${url}`);

});

fs.writeFileSync('without-whiteboards.csv', csv.join('\n'), 'utf-8');