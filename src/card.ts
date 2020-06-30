/* eslint-disable no-console */
import { IncomingMessage, ServerResponse } from 'http';

const handler = async (_req: IncomingMessage, res: ServerResponse) => {
  try {
    const html = `
    <!DOCTYPE html>
  <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet">
    <style>
     
    </style>
    <body>
      <div class="container">
        <div class="title">Hello World</div>
        <div class="author">
          <img src="" class="author-image" />
          Kahlil Whitfield
        </div>
        <div class="website">http</div>
      </div>
    </body>
  </html>
    `;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Internal Error</h1> <p>Sorry, an error occurred.</p>');

    console.error(err);
  }
};

export default handler;
