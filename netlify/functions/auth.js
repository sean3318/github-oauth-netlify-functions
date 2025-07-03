const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const redirect_uri = process.env.BASE_URL + "/.netlify/functions/callback";
  const url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=repo`;
  return {
    statusCode: 302,
    headers: {
      Location: url,
    },
  };
};
