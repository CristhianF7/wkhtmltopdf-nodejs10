var wkhtmltopdf = require('./src/helpers/wkhtmltopdf');

exports.handler = async (event) => {
  const html = '<h1>Test</h1>'
  wkhtmltopdf(html, { pageSize: 'letter'}, function(error, stream) {
    console.log("Here is the Stream", stream);
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};.

