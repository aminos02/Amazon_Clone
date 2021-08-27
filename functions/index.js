/* eslint-disable max-len */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JSsZRJyUYxiaz3WEWRglRcjEuzN0E4uUHym20sJ0Mqlfdoteoj0P4VIjJC4OBPG4wXiGcTfNEz4Sr509Wp4g8dG00uInraDKl"
);

const app = express();

// Middlewares:
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

//console.log(stripe);

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("Total Amount is: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // Ok -Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen Command
exports.api = functions.https.onRequest(app);
/*
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
*/
