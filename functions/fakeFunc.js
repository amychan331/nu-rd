import faunadb from 'faunadb';
import querystring from "querystring";

const fakeFunc = async (event, context, cb) => {
// You provide the callback parameter, which is optional, but recommended.
// Netlify provides the event and context parameters when the function is invoked.
// Properties on the event object:
// *  event.path >>> "Path parameter",
// *  event.httpMethod >>> "Incoming request's method name"
// *  event.headers >>> {Incoming request headers}
// *  event.queryStringParameters >>> {query string parameters }
// *  event.body >>> "A JSON string of the request payload."
// *  event.isBase64Encoded >>> "A boolean flag to indicate if the applicable request payload is Base64-encode"

/* Random Example: limit responses to only respond to POST requests:
* if (event.httpMethod !== "POST") {
*   return { statusCode: 405, body: "Method Not Allowed" };
* }
*/

  const whichOp = event.queryStringParameters.foo || 'Does Something';
  // code for '*'	is %2A
  // code for '+' is %2B
  // code for '-' is %2D
  // code for '/' is %2F

  return {
    statusCode: 200,
    body: `You sent me a GET URL with the query the ${whichOp`}
  };
}

// http://localhost:9000/fakeFunc?foo=%2B
// curl -X GET 'http://localhost:9000/hello-world-function?whichOp=%2B'

exports.handler = fakeFunc