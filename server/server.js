const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log('SERVER listening on port: ', PORT);
})

module.exports = app;

