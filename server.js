const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`This server running on port ${PORT}`);
});
