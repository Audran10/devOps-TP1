import express from 'express';
const app = express();
const port = process.env.PING_LISTEN_PORT || 8080;

app.get('/ping', (req, res) => {
    res.send(req.headers);
});

app.all('*', (req, res) => {
    res.status(404).end();
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});