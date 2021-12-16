import * as functions from "firebase-functions";

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use( '/', require('./routes/index'))

exports.app = functions.https.onRequest(app);
