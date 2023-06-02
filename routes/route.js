const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://peerawat:YDCOyOKDb1LEyUV8@nodedev.fgnykzv.mongodb.net/";

const route = express.Router();


module.exports = (app) => {
    app.get('/hero', async (req, res) => {
        const client = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
          await client.connect();
          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            res.send("Pinged your deployment. You successfully connected to MongoDB!");
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    });
  };