const wkhtmltopdf = require('wkhtmltopdf')

wkhtmltopdf.command = `${process.cwd()}/wktools/bin/wkhtmltopdf`
module.exports = wkhtmltopdf
