# Using Express.js with Vercel

### Create your express server

You can also create a standalone Express.js app with Vercel. First, create a file index.js and add it to an /api folder. This is similar to the app.js file in serverful Express.js applications. The /api directory is where we'll add our Serverless Functions.

```bash
import dotenv from 'dotenv';
import express from 'express';

// environment variable configuration

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
```

### Add vercel.json file

Add a vercel.json at the root of your project to specify your app's behavior.

```bash
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}
```

# Note

## Adding a Public Directory (If you want)

To serve static content, we would normally do app. <strong>use(express.static('public'))</strong> in our main file <strong>index.js</strong>. Instead, we can add a /public folder to the root.
