import faunadb from 'faunadb';
import querystring from "querystring";
import axios from 'axios';

const netlifyFunction = (event, context, cb) => {
//http://localhost:9000/read-randomized-data

  const randomArrNum = (limit) => {
    // generate number between 0 and ___
    return Math.floor(Math.random() * limit )
  }

  const setNamesArr = data => { console.log('setting Names'); let namesArr = data['names']; return namesArr; }
  const setNounsArr = data => { console.log('setting Nouns'); let nounsArr = data['nouns']; return nounsArr; }

  const getDatabaseArrs = () => {
    console.log('axios getting...')
    // return axios.get('http://localhost:9000/read-randomized-data')
    return axios.get('/.netlify/functions/read-randomized-data')
      .then( response => {
        return response.data
      })
      .catch((error) => {
        return cb(null, {
          statusCode: 400,
          body: JSON.stringify(error)
        })
      });
  }

  const readyResponse = (data) => {
    return new Promise( (resolve, reject) => {
      var namesArr = setNamesArr(data);
      var numOfNames = namesArr.length;
        var randomIndx1 = randomArrNum(numOfNames);
        var randomIndx2 = randomArrNum(numOfNames);
        while ( randomIndx1 === randomIndx2) {
          randomIndx2 = randomArrNum(numOfNames);
        }
      var name1 = namesArr[randomIndx1];
      var name2 = namesArr[randomIndx2];

      var nounsArr = setNounsArr(data);
      var numOfNouns = nounsArr.length;
      var randomNounIndx = randomArrNum(numOfNouns);
      var noun = nounsArr[randomNounIndx];

      var verb = 'does a thing';

      var responseObject = { name1, name2, noun, verb };
      var responseJSON = JSON.stringify( responseObject );
      console.log('responseJSON>> ', responseJSON);

      resolve(responseJSON);
    })
  }
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  const whichOp = event.queryStringParameters.operator || 'foo'; // %2B
  return getDatabaseArrs()
    .then( data => {
          return readyResponse(data);
    })
    .then( resstring => {
      return {
        statusCode:200,
        body: resstring
      }
    })
    .catch((error) => {
      return cb(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
};


// Properties on the event object:
// -  event.path >>> "Path parameter",
// -  event.httpMethod >>> "Incoming request's method name"
// -  event.headers >>> {Incoming request headers}
// -  event.queryStringParameters >>> { query string parameters }
// -  event.body >>> "A JSON string of the request payload."
// -  event.isBase64Encoded >>> "A boolean flag to indicate if the applicable request payload is Base64-encode"

exports.handler = netlifyFunction;