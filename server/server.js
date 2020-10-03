const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

app.get('*', (request, response) => {
  response.write(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&amp;display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&amp;display=swap" rel="stylesheet">
        <link rel="shortcut icon" href="assets/favicon-06.svg" type="image/x-icon">
        <title>Make Simple</title>
      </head>
      <body>
        <div id="app">${request.url}</div>
        <div id="menuContainer"></div>
      <script src="js/app.183516d99d77ecf91bff.js"></script></body>
    </html>`,
  );
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(`Listen http://localhost:${port}`);
});
