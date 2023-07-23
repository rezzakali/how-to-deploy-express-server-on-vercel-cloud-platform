import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// app object
const app = express();

// route handlers
app.get('/api', (req, res) => {
  res.send('Your requested method is GET');
});

// listening the server

app.listen(process.env.PORT || 8000, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});
