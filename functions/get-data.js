import faunadb from 'faunadb';
import querystring from "querystring";

//    start of URL [changes!]: https://keen-boyd-38d83f.netlify.com/
// https://master--keen-boyd-38d83f.netlify.com/.nelify/functions/get-data?operator=%2B
//    ending of URL: /.netlify/functions/get-data?operator=%2B    <<
// OUTPUT: { name1: 'Veronica', name2: 'Amy', noun: 'books', verb: 'gives'};

const checkForFaunaKey = () =>{
    if (!process.env.FAUNADB_SERVER_SECRET) {
      console.log(chalk.yellow('Required FAUNADB_SERVER_SECRET enviroment variable not found.'))
      process.exit(1)
      return false;
    }
    return true;
}

const randomArrNum = (limit) => {
  // generate number between 0 and ___
  return Math.floor(Math.random() * limit )
}

const netlifyFunction = async (event, context, cb) => {

  const whichOp = event.queryStringParameters.operator || 'does something';

  // if (!checkForFaunaKey()){
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify(error)
  //   };
  // }

  /* Query db LOOKUP whichOp */
  //TODO:
  console.log(whichOp);
  var verb = 'removes';// whichOp

  /*  GET THE NAMES+NOUNS JSON */


  /* ===> */
  // var reponseJSON = JSON.parse(  )

  var namesArr =  ['Luke','Leia','Lydia','Amy','Veronica']; // reponseJSON.names;

  //TODO:
  var nounsArr =  ['apple','pencil','book']; // reponseJSON.nouns;
  var numberOfNames = namesArr.length;
  var numberOfNouns = nounsArr.length;
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /* Put the response object together */
  var randomIndx1 = randomArrNum(numberOfNames);
  var randomIndx2 = randomArrNum(numberOfNames);
    // (Make sure names are different)
      while( randomIndx1 === randomIndx2) {
        randomIndx2 = randomArrNum(numberOfNames);
      }

  var name1 = namesArr[randomIndx1];
  var name2 = namesArr[randomIndx2];
  var noun = nounsArr[ randomArrNum(numberOfNouns)  ];

  var responseObject = { name1, name2, noun, verb };

  var responseJSON = JSON.stringify( responseObject );

  return {
    statusCode: 200,
    body: responseJSON
  };

}

// Properties on the event object:
// -  event.path >>> "Path parameter",
// -  event.httpMethod >>> "Incoming request's method name"
// -  event.headers >>> {Incoming request headers}
// -  event.queryStringParameters >>> { query string parameters }
// -  event.body >>> "A JSON string of the request payload."
// -  event.isBase64Encoded >>> "A boolean flag to indicate if the applicable request payload is Base64-encode"

exports.handler = netlifyFunction;