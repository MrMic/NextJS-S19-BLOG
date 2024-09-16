// * INFO:  API => /api/contact

import * as dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from "mongodb";

// ! WARN: On the Server Side only!
async function handler( req, res ) {
  if ( req.method === 'POST' ) {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes( '@' ) ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status( 422 ).json( { message: 'Invalid input.' } );
      return;
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    // console.log("🪚 newMessage:", newMessage);

    // ______________________________________________________________________
    let client;
    try {
      client = await MongoClient.connect( process.env.MONGODB_URI );
    } catch ( error ) {
      console.log( "🪚 error:", error );
      res.status( 500 ).json( { message: 'Could not connect to database' } );
      return;
    }

    // * INFO: 'nextjs-blog' is the name of the database
    const db = process.env.DEV === 'dev' ? client.db( 'nextjs-blog-dev' ) : client.db( 'nextjs-blog' );
    // const db = client.db('nextjs-blog');

    try {
      const result = await db.collection( 'messages' ).insertOne( newMessage );
      newMessage._id = result.insertedId;

      console.log( "🪚 result:", result );
    } catch ( error ) {
      console.log( "🪚 error:", error );
      client.close();
      res.status( 500 ).json( { message: 'Storing message failed!' } );
      return;
    }

    client.close();

    res.status( 201 ).json( { message: 'Successfully stored message! 💾', message: newMessage } );

  }
}

export default handler;
