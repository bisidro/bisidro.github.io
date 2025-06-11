// add-redirect.js
const fs = require('fs');
const path = require('path');

const redirectHtml = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="refresh" content="0; url=/bisidro.github.io/" />
    <script>
      window.location.href = "/bisidro.github.io/";
    </script>
    <title>Redirecting...</title>
  </head>
  <body>
    If you are not redirected automatically, <a href="/bisidro.github.io/">click here</a>.
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'out', 'index.html'), redirectHtml.trim());