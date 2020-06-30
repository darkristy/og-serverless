export const getCss = () => {
  return ``;
};

export const getHtml = (parsedReqs: ParsedReqs) => {
  const { author, title, website, image } = parsedReqs;

  return `
  <!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Barlow+Condensed&display=swap" rel="stylesheet">
  <style>
    ${getCss()}
  </style>
  <body>
    <div class="container">
      <div class="title">${title}</div>
      <div class="author">
        <img src="${image}" class="author-image" />
        ${author}
      </div>
      <div class="website">${website}</div>
    </div>
  </body>
</html>
  `;
};
