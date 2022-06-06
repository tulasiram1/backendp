const app = require('./index');

const PORT = process.env.PORT;
app.listen(PORT, () => { console.log('Running on port 8080'); });