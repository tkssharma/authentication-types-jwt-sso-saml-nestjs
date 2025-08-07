const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Step 1: Redirect user to GitHub
app.get('/login', (req, res) => {
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user`;
  res.redirect(redirectUrl);
});

// Step 2: GitHub redirects back with a code
app.get('/callback', async (req, res) => {
  const code = req.query.code;
  console.log(code);
  console.log(req.query);

  // Step 3: Exchange code for access token
  const tokenRes = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    },
    {
      headers: {
        accept: 'application/json',
      },
    }
  );

  const access_token = tokenRes.data.access_token;
  console.log(access_token);
  // Step 4: Use token to get user info
  const userRes = await axios.get('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  res.send(`
    <h2>Welcome, ${userRes.data.login}</h2>
    <img src="${userRes.data.avatar_url}" width="100" />
  `);
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});