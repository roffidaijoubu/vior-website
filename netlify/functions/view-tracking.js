const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

exports.handler = async (event) => {
  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('tracking')), { size: 100 }),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify(result.data, null, 2),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve tracking data' }),
    };
  }
};