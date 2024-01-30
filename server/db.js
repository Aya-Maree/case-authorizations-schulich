const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connect() {
    try {
      await client.connect();
      console.log('Connected successfully to MongoDB server');
      const db = client.db('caseroomAuthorization');
  
      return { client, db };
    } catch (err) {
      console.error('Failed to connect to MongoDB', err);
      process.exit(1);
    }
  }
  
  module.exports = { connect };