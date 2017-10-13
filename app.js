const fs = require('fs');
const cheerio = require('cheerio');
const Baby = require('babyparse');
const Papa = require('papaparse');

// txt
let text = fs.readFileSync('./files/text.txt', 'utf-8');
text = text.split(" ").reverse().join(" ");
fs.writeFileSync('./files/text.txt', text)

// json
let json = fs.readFileSync('./files/rangers.json', 'utf-8');
let parsedJSON = JSON.parse(json)
parsedJSON.push({name: "Tommy Oliver", color: "White"});
fs.writeFileSync('./files/rangers.json', JSON.stringify(parsedJSON));

// html
let html = fs.readFileSync('./files/helloworld.html', 'utf-8');
$ = cheerio.load(html);
$('h1').text("Goodbye World!");
let alteredHtml = $.html().toString();
fs.writeFileSync('./files/helloworld.html.bak', alteredHtml)

// xml
let xml = fs.readFileSync('./files/helloworld.xml', 'utf-8');
$ = cheerio.load(xml, {xmlMode: true});
$('heading').text("Goodbye World!");
let alteredXml = $.xml().toString();
fs.writeFileSync('./files/helloworld.xml.bak', alteredXml)

// csv
let csv = fs.readFileSync('./files/data.csv', 'utf-8');
let parsedCsv = Papa.parse(csv);








//
