const faunadb = require('faunadb');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

exports.handler = async (event) => {
  const { type, affiliateSlug, eventUrl } = JSON.parse(event.body);

  try {
    await client.query(
      q.Create(
        q.Collection('tracking'),
        {
          data: {
            type,
            affiliateSlug,
            eventUrl,
            timestamp: q.Now()
          }
        }
      )
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Tracking successful' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to track' }),
    };
  }
};