import { IncomingMessage } from 'http';
import { parse } from 'url';

const parseReqs = (req: IncomingMessage) => {
  const { query = {} } = parse(req.url || '', true);

  const { author, title, website, image } = query;
  const parameters = [author, title, website, image];

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
  };
  console.log(JSON.stringify(parsedReqs));

  return parsedReqs;
};

export default parseReqs;
