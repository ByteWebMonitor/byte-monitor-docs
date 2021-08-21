const cheerio = require('cheerio');
var fs = require('fs');
HTML1 = cheerio.load(fs.readFileSync('./docs/.vitepress/dist/index.html'));
HTML2 = cheerio.load(fs.readFileSync('config.html'));
HTML1('head').append(HTML2.html())
console.log(HTML1.html())

fs.writeFileSync('./docs/.vitepress/dist/index.html', HTML1.html());
