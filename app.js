const http = require('http');

const server = http.createServer((req, res) => {
  res.end('KUBERNETES +++ The deployment, scaling, and maintenance of containerized applications are all automated via the open-source container orchestration technology known as Kubernetes.');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
