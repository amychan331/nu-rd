import faunadb from 'faunadb'
require('dotenv').config()

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context, callback) => {
  console.log('Function `read-randomized-data` invoked')
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_getRandomWord'))))
  .then((response) => {
    const wordRefs = response.data
    const getWordDataQuery = wordRefs.map(ref => q.Get(ref))
    return client.query(getWordDataQuery).then((ret) => {
      const data = ret[0]["data"]
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(data)
      })
    })
  }).catch((error) => {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}