import { IncomingMessage } from 'http';
import { parse } from 'url';

const parseReqs = (req: IncomingMessage) => {
  const { query = {} } = parse(req.url || '', true);

  const { author, title, website, image, handle } = query;
  const parameters = [author, title, website, image, handle];

  parameters.map(param => {
    if (Array.isArray(param)) {
      throw new Error(`${param} must be a string!`);
    }
  });

  const parsedReqs: ParsedReqs = {
    author,
    title,
    website,
    image,
    handle,
  };
  console.log(JSON.stringify(parsedReqs));

  return parsedReqs;
};

export default parseReqs;
